import axios from 'axios'

const ENV = process.env.NODE_ENV || 'PROD' // Use environment variable or default to 'PROD'

export const apiInstance = axios.create({
  baseURL: 'https://teachme-app.com.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
