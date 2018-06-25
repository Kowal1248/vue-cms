import axios from 'axios'

export default {
  get(data) {
    console.log(data);
    if(data == undefined)
      return axios.get('http://10.0.17.8:8000/pages')
    else {

      return axios.get('http://10.0.17.8:8000/pages/'+data)
    }
  },

  save(data){
    return axios.post('http://10.0.17.8:8000/pages',data)
  },

  put(data){
    return axios.put('http://10.0.17.8:8000/pages/' + data._id, data)
  },

  delete(data){
    return axios.delete('http://10.0.17.8:8000/pages/' + data)
  }
}
