import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { DescCursos } from './pages/CursoDesc'
import { Carrinho } from './pages/Carrinho'
import { Navegar } from './pages/Navegar'

export const appRoutes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/curso-desc',
    element: <DescCursos />,
  },
  {
    path: '/carrinho',
    element: <Carrinho />,
  },
  {
    path: '/Navegar',
    element: <Navegar />,
  },
])
