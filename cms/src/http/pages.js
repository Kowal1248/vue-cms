import axios from 'axios'
import config from '../config.json'

export default {
  get(data) {
    if(data == undefined)
      return axios.get(config.server + '/pages')
    else {

      return axios.get(config.server + '/pages/'+data)
    }
  },

  save(data){
    return axios.post(config.server + '/pages',data)
  },

  put(data){
    return axios.put(config.server + '/pages/' + data._id, data)
  },

  delete(data){
    return axios.delete(config.server + '/pages/' + data)
  }
}
