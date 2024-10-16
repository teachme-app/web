import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { DescCursos } from './pages/CursoDesc'
import { Carrinho } from './pages/Carrinho'
import { Navegar } from './pages/Navegar'
import { Cadastro } from './pages/Cadastro'
import { MeusCursos } from './pages/MeusCursos'
import { Perfil } from './pages/Perfil'
import { Downloads } from './pages/Downloads'
import { Aula } from './pages/Aula'
import Materiais from './pages/Material'
import { CriarCurso } from './pages/Criar Curso'
import { EditarCurso } from './pages/Editar Curso'
import { Chat } from './pages/Chat'

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
  {
    path: '/downloads',
    element: <Downloads />,
  },
  {
    path: '/aula',
    element: <Aula />,
  },

  {
    path: '/materiais',
    element: <Materiais />,
  },
  {
    path: '/criar-curso',
    element: <CriarCurso />,
  },
  {
    path: '/editar-curso',
    element: <EditarCurso />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
])
