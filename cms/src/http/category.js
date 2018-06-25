import axios from 'axios'
import config from '../config.json'

export default {
  get(data) {
    if(data == undefined)
      return axios.get(config.server + '/category')
    else {

      return axios.get(config.server + '/category/'+data)
    }
  },

  save(data){
    return axios.post(config.server + '/category',data)
  },

  put(data){
    return axios.put(config.server + '/category/' + data._id, data)
  },

  delete(data){
    return axios.delete(config.server + '/category/' + data)
  }
}
