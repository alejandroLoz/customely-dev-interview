import axios from 'axios'
import qs from 'qs'
import type { IGetProductsParams } from '@/types'

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_CUSTOMELY_API_BASE_URL
})

export function auth() {
  const payload = {
    username: import.meta.env.VITE_CUSTOMELY_USER,
    password: import.meta.env.VITE_CUSTOMELY_PASSWORD,
    grant_type: 'password',
    client_id: 'all'
  }
  const config = {
    url: '/token',
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: qs.stringify(payload)
  }

  return apiBase(config).then((response) => {
    apiBase.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
    // console.log(response.data);
    return response.data
  })
}

export function getProducts(params: IGetProductsParams = {}) {
  const { to = 10, from = 0, searchString = '' } = params

  return apiBase
    .get('/Product/GetProductsFromTo', {
      params: {
        to,
        from,
        searchString
      }
    })
    .then((response) => {
      return response.data
    })
}

export default apiBase
