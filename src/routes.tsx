import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/layout/app-layout'
import { ErrorPage } from './pages/error-page'
import { HomePage } from './pages/home'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  // {
  //   basename: import.meta.env.BASE_URL,
  // }
)
