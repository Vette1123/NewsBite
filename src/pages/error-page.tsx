import { useRouteError } from 'react-router-dom'

interface RouteError {
  statusText?: string
  message?: string
}

export function ErrorPage() {
  const error = useRouteError() as RouteError

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Oops!</h1>
      <p className="mb-4 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
