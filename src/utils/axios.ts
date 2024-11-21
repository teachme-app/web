import axios from 'axios'

enum URLS {
  PROD = 'https://teachme-app.com.br/api/v1',
  DEV = 'http://localhost:3000/api/v1',
}

export const apiInstance = axios.create({
  baseURL: URLS.PROD,
  headers: {
    'Content-Type': 'application/json',
  },
})
