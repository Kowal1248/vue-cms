import axios from 'axios'
import config from '../config.json'

export default {
  get() {
    return axios.get(config.server + '/settings')
  },
  save(data) {
    return axios.put(config.server + '/settings/' + data._id,data)
  }

}
