import axios from 'axios'
import config from '../config.json'

export default {
  get(data) {
    if(data == undefined)
      return axios.get(config.server + '/menu')
    else {

      return axios.get(config.server + '/menu/'+data)
    }
  },

  save(data){
    return axios.post(config.server + '/menu',data)
  },

  put(data){
    return axios.put(config.server + '/menu/' + data._id, data)
  },

  delete(data){
    return axios.delete(config.server + '/menu/' + data)
  }
}
