import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Login } from './pages/Login'
import { DescCursos } from './pages/CursoDesc'
import { Carrinho } from './pages/Carrinho'
import { Navegar } from './pages/Navegar'
import { Cadastro } from './pages/Cadastro'
import { MeusCursos } from './pages/MeusCursos'
import { Perfil } from './pages/Perfil'
import { Downloads } from './pages/Downloads'
import { Aula } from './pages/Aula'
import { Materiais } from './pages/Material'
import { CriarCurso } from './pages/Criar Curso'
import { EditarCurso } from './pages/Editar Curso'
import { Chat } from './pages/Chat'
import ProtectedRoute from './utils/protectedRoute'
import { CriarAula } from './pages/Criar Aula'
import NotFoundPage from './pages/404'

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      { path: 'curso-desc/:courseId', element: <DescCursos /> },
      { path: 'criar-aula/:id', element: <CriarAula /> },
      { path: 'cursos', element: <Navegar /> },
      { path: 'carrinho', element: <Carrinho /> },
      { path: 'meus-cursos', element: <MeusCursos /> },
      { path: 'perfil', element: <Perfil /> },
      { path: 'downloads', element: <Downloads /> },
      { path: 'aula/:id', element: <Aula /> },
      { path: 'materiais', element: <Materiais /> },
      { path: 'criar-curso', element: <CriarCurso /> },
      { path: 'editar-curso/:courseId', element: <EditarCurso /> },
      { path: 'chat', element: <Chat /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
])
