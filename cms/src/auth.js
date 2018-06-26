import axios from 'axios'
import config from './config'

export default {
  login(email, pass, cb) {

    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        axios.defaults.headers.common['X-Auth'] = res.token;

        localStorage.token = res.token
        localStorage.email = res.email

        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    delete localStorage.email
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {

    axios.defaults.headers.common['X-Auth'] = localStorage.token;

    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  axios.post(config.server + '/session', {
      email: email,
      password: pass
    })
    .then(function(res) {
      var data = res.data
      cb({
        authenticated: true,
        token: data.token,
        email: data.email
      })
      axios.defaults.headers.common['X-Auth'] = data.token;
    })
    .catch(function() {
      cb({
        authenticated: false
      })
    })
}
