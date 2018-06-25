import axios from 'axios'

export default {
  get() {
    return axios.get('http://10.0.17.8:8000/users')
  },
  save(data) {
    return axios.post('http://10.0.17.8:8000/users',data)
  }
}
