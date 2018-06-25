import axios from 'axios'

export default {
  post(data) {
    var fd = new FormData();
    fd.append('file', data);
    return axios.post('http://10.0.17.8:8000/uploads', fd)
  },

  get(){
    return axios.get('http://10.0.17.8:8000/media')
  },
  delete(item){
    return axios.delete('http://10.0.17.8:8000/media/' + item.media)
  }
}
