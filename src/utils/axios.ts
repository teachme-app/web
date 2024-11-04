import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://teachme-app.com.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
