import axios from 'axios'

let service = axios.create({
  baseURL: 'http://192.168.3.15:8080/',
  timeout: 3000
})

export default service
