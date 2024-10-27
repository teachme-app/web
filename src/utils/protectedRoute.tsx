import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { ReactNode } from 'react'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const logado = Cookies.get('logado')
  if (!logado) {
    return <Navigate to='/login' />
  }
  return children
}

export default ProtectedRoute
