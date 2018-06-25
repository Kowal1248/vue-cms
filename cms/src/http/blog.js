import axios from 'axios'
import config from '../config.json'

export default {
  get(data) {
    if(data == undefined)
      return axios.get(config.server + '/blog')
    else {

      return axios.get(config.server + '/blog/'+data)
    }
  },

  save(data){
    return axios.post(config.server + '/blog',data)
  },

  put(data){
    return axios.put(config.server + '/blog/' + data._id, data)
  },

  delete(data){
    return axios.delete(config.server + '/blog/' + data)
  }
}
