import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { DescCursos } from "./pages/CursoDesc";

export const appRoutes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/curso-desc',
        element: <DescCursos />
    }
])