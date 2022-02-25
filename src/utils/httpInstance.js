import axios from 'axios';
import {getCookie} from '@/utils/cookieHelper'

const httpInstance = axios.create({
  baseURL: `api`,
  // headers: {
  //   "Content-Type": "application/json"
  // }
})

httpInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${getCookie('token')}`
  return config
})

export default httpInstance