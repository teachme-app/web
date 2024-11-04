import axios from 'axios'

let devURL = 'http://localhost:3000/api/v1'
let prodURL = 'https://teachme-app.com.br/api/v1'

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
