import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes'

function App() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  )
}

export default App
