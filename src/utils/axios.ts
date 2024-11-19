import axios from 'axios'

enum URLS {
  PROD = 'https://teachme-app.com.br/api/v1',
  DEV = 'http://localhost:3000/api/v1',
}

export const apiInstance = axios.create({
  baseURL: URLS.DEV,
  headers: {
    'Content-Type': 'application/json',
  },
})
