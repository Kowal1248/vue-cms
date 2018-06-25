import axios from 'axios'
import config from '../config.json'

export default {
  get() {
    return axios.get(config.server + '/users')
  },
  save(data) {
    return axios.post(config.server + '/users',data)
  }
}
