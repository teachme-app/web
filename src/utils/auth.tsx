import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { apiInstance } from './axios'

interface AuthContextType {
  user: string | null
  login: (user: { email: string; password: string }) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const logado = Cookies.get('logado')
    if (logado) {
      setUser('user')
    }
  }, [])

  const login = async (userAuth: { email: string; password: string }) => {
    try {
      // const response = await axios.post('http://localhost:3000/api/v1/login', userAuth)
      const response = await apiInstance.post('/login', userAuth)
      const user = await apiInstance.get('/user-token', {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      })
      Cookies.set('role', String(user.data.role))
      Cookies.set('token', String(response.data.token))
      Cookies.set('logado', 'true')
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('logado')
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
