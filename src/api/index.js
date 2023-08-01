import axios from 'axios'

let service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 3000
})

export default service
