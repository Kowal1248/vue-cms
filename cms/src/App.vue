<template>
<div id="app">
  <div id="wrapper" class="toggled" v-if="loggedIn">
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand" style="padding-top:9px; background-color: #fff;">
          <a href="#">
            <img src="./assets/logo.png" alt="logo" width="180px" style="margin-left:-10px; ">
          </a>
        </li>
        <li style="margin-top:20px;border-top:1px solid #eee;">
          <router-link to="/">
            <a>
              <span class="ti-home menu-icon" style="color:#2196f3"></span>Kokpit
            </a>
          </router-link>
        </li>

        <li>
          <router-link to="/media"> <a><span class="ti-link menu-icon" style="color: #ff5722;"></span>Media</a></router-link>
        </li>
        <li>
          <router-link to="/pages"> <a><span class="ti-layout-tab-v menu-icon" style="color: #673ab7"></span>Strony</a></router-link>
        </li>
        <li>
          <router-link to="/blog"> <a><span class="ti-layers menu-icon" style="color: #673ab7"></span>Blog</a></router-link>
        </li>
        <li>
          <router-link to="/menu"> <a><span class="ti-list menu-icon" style="color:#e91e63"></span>Menu</a></router-link>
        </li>
        <li>
          <router-link to="/settings"> <a><span class="ti-settings menu-icon" style="color: #9c27b0"></span>Ustawienia</a></router-link>
        </li>
        <li>
          <router-link to="/users"> <a><span class="ti-user menu-icon" style="color: #f44336"></span>Użytkownicy</a></router-link>
        </li>
        <li>
          <a href="/logout"><span class="ti-angle-left menu-icon" style="color: #009688"></span>Wyloguj</a>
        </li>

      </ul>
    </div>

  </div>
  <template v-if="$route.matched.length">
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
</template>
    <template v-else>
<p>
  Zalogowany {{ loggedIn ? 'in' : 'out' }}</p>
</template>

  </div>
</template>
<script>
import auth from './auth'

export default {
  data() {
    return {
      loggedIn: auth.loggedIn(),
      loading: false
    }
  },
  mounted() {
    this.$Progress.finish()
  },
  created() {
    auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      },
      this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach(() => {
      this.$Progress.finish()
    })
  }
}
</script>
<style lang="scss">
@import './styles/custom-app.css';
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/themify-icons.css';
@import './styles/custom.css';
@import './styles/fab.css';

</style>
