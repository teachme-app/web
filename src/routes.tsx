import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { DescCursos } from './pages/CursoDesc'
import { Carrinho } from './pages/Carrinho'
import { Navegar } from './pages/Navegar'
import { Cadastro } from './pages/Cadastro'
import { MeusCursos } from './pages/MeusCursos'
import { Perfil } from './pages/Perfil'

export const appRoutes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
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
    path: '/',
    element: <Navegar />,
  },
  {
    path: '/meus-cursos',
    element: <MeusCursos />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
])