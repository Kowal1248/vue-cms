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
          <router-link to="/pages"> <a><span class="ti-layers menu-icon" style="color: #673ab7"></span>Strony</a></router-link>
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
<style media="screen">
body {
  overflow-x: hidden;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
  padding-left: 290px !important;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}


/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 280px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  font-size: 15px;
  font-weight: 400;
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li:hover {
  background-color: #f0f7ff;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #4384e0;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 0;
  }
  #wrapper.toggled {
    padding-left: 250px;
  }
  #sidebar-wrapper {
    width: 0;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 280px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
  }
  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
  }
}
.pulse {
  margin:100px;
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
</style>
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
<style lang="scss">@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/themify-icons.css';
@import './styles/custom.css';</style>
