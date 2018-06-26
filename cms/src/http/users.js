import axios from 'axios'
import config from '../config.json'

export default {
  get(data) {
    if(data == undefined)
      return axios.get(config.server + '/users')
    else {
      return axios.get(config.server + '/users/'+data)

    }
  },
  save(data) {
    return axios.post(config.server + '/users',data)
  }
}
