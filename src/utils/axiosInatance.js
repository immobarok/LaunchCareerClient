import axios from 'axios';

const axiosInatance = axios.create({
  baseURL: 'https://job-pilot-server-pf92.vercel.app',
  withCredentials: true
})

export default axiosInatance