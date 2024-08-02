import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'

interface AuthContextType {
  user: string | null
  login: (user: { email: string; password: string }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<string | null>(null)

  const login = async (user: { email: string; password: string }) => {
    await axios
      .post('http://localhost:3000/api/v1/login', user)
      .then((response) => {
        Cookies.set('token', response.data.token)
        setUser(user.email)
      })
      .catch((error) => {
        console.error(error)
        // Handle error based on your application's logic
      })
  }

  const logout = () => {
    Cookies.remove('token')
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
