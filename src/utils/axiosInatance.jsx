import React from 'react'
import axios from 'axios';

const axiosInatance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true
})

export default axiosInatance