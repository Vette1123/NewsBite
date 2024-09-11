import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/layout/app-layout'
import { HomePage } from './pages/home'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
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
