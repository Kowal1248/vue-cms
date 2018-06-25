import Vue from 'vue'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import VueSwal from 'vue-swal'
import wysiwyg from "vue-wysiwyg";
import VModal from 'vue-js-modal'
import VueClipboard from 'vue-clipboard2'
import VueClazyLoad from 'vue-clazy-load'
import VueDraggable from 'vuedraggable'

import config from './config.json'

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

Vue.use(VueProgressBar, options)
Vue.use(VueRouter)
Vue.use(VueSwal)
Vue.use(VModal, { dialog: true })
Vue.use(VueClipboard)
Vue.use(VueClazyLoad)
Vue.use(VueDraggable)
Vue.use(wysiwyg, {});


import auth from './auth'
import App from './App.vue'
import Pages from './components/Pages.vue'
import PagesEdit from './components/PagesEdit.vue'
import PagesAdd from './components/PagesAdd.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Settings from './components/Settings.vue'
import Sexy from './components/Sexy.vue'
import httpSettings from './http/settings'
import Media from './components/Media.vue'
import Users from './components/Users.vue'
import UsersAdd from './components/UsersAdd.vue'
import Menu from './components/Menu.vue'
import axios from 'axios'

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
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
      component: Pages
    },
    {
      path: '/pages/edit/:id',
      component: PagesEdit
    },
    {
      path: '/pages/add',
      component: PagesAdd
    },
    {
      path: '/settings',
      component: Settings
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
      path: '/sexy',
      component: Sexy
    },
    {
      path: '/media',
      component: Media
    },
    {
      path: '/users',
      component: Users,
    },
    {
      path: '/users/add',
      component: UsersAdd,
    },
    {
      path: '/menu',
      component: Menu
    },


    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

let settings = config.server;

  new Vue({
    el: '#app',
    router,
    settings,
    render: h => h(App)
  })
