import axios from 'axios'

const ENV = 'DEV' // PROD

export const apiInstance = axios.create({
  baseURL:
    ENV === 'DEV'
      ? 'http://localhost:3000/api/v1'
      : ENV === 'PROD'
      ? 'https://teachme-app.com.br/api/v1'
      : '',
  headers: {
    'Content-Type': 'application/json',
  },
})
