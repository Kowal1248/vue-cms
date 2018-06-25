import axios from 'axios'
import config from '../config.json'

export default {
  post(data) {
    var fd = new FormData();
    fd.append('file', data);

    return axios.post(config.server + '/uploads', fd)
  },

  get(){
    return axios.get(config.server + '/media')
  },
  delete(item){
    return axios.delete(config.server + '/media/' + item.media)
  }
}
