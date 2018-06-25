import axios from 'axios'

export default {
  get() {
    return axios.get('http://10.0.17.8:8000/settings')
  },
  save(data) {
    return axios.put('http://10.0.17.8:8000/settings/' + data._id,data)
  }

}
