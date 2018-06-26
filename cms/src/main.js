import Vue from 'vue'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import VueSwal from 'vue-sweetalert2'
import wysiwyg from "vue-wysiwyg";
import VModal from 'vue-js-modal'
import VueClipboard from 'vue-clipboard2'
import VueClazyLoad from 'vue-clazy-load'
import VueDraggable from 'vuedraggable'
import fab from 'vue-fab'
import moment from 'moment'
Vue.config.productionTip = false


const options = {
  color: '#3399ff',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY hh:mm')
  }
})
Vue.use(VueProgressBar, options)
Vue.use(VueRouter)
Vue.use(VueSwal)
Vue.use(VModal, {
  dialog: true
})
Vue.use(VueClipboard)
Vue.use(VueClazyLoad)
Vue.use(VueDraggable)
Vue.use(wysiwyg, {});
Vue.use(fab)

import auth from './auth'
import App from './App.vue'
import Pages from './components/Pages.vue'
import PagesEdit from './components/PagesEdit.vue'
import PagesAdd from './components/PagesAdd.vue'

import Blog from './components/Blog.vue'
import BlogEdit from './components/BlogEdit.vue'
import BlogAdd from './components/BlogAdd.vue'

import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Settings from './components/Settings.vue'
import Media from './components/Media.vue'
import Users from './components/Users.vue'
import UsersAdd from './components/UsersAdd.vue'
import Menu from './components/Menu.vue'

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/pages',
      component: Pages,
      beforeEnter: requireAuth
    },
    {
      path: '/pages/edit/:id',
      component: PagesEdit,
      beforeEnter: requireAuth
    },
    {
      path: '/pages/add',
      component: PagesAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/blog',
      component: Blog,
      beforeEnter: requireAuth
    },
    {
      path: '/blog/edit/:id',
      component: BlogEdit,
      beforeEnter: requireAuth
    },
    {
      path: '/blog/add',
      component: BlogAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/settings',
      component: Settings,
      beforeEnter: requireAuth
    },
    {
      path: '/',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/media',
      component: Media,
      beforeEnter: requireAuth
    },
    {
      path: '/users',
      component: Users,
      beforeEnter: requireAuth
    },
    {
      path: '/users/add',
      component: UsersAdd,
      beforeEnter: requireAuth
    },
    {
      path: '/menu',
      component: Menu,
      beforeEnter: requireAuth
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})

import config from './config.json'
let settings = config

let language = require("./language/" + settings.language + ".json");


new Vue({
  el: '#app',
  router,
  settings,
  language,
  render: h => h(App)
})
