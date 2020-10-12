import axios, { AxiosInstance } from 'axios'
import handleError from 'util/handleError'

// import handleError from '../util/handleError'

// export const API_URL = 'http://localhost:19999'
export const API_URL = 'http://157.230.213.199:3000'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 3000,
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    console.log('RESPONSE', { err })
    handleError(err?.response?.data)
    throw err
  }
)

export default axiosInstance
