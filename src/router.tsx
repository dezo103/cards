import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignIn } from '@/components/layout/main/sign-in/sign-in'
import { Decks } from '@/pages/decks'
import { useMeQuery } from '@/services/auth.service'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return
  }

  const isAuthenticated = !isError

  console.log(isError, 'isError')

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
