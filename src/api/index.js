import axios from 'axios'

let service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 3000
})

export default service
