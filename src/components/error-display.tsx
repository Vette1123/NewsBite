import { AxiosError } from 'axios'
import { AlertCircle, Clock, Server, WifiOff } from 'lucide-react'

type ErrorDisplayProps = {
  error: AxiosError | Error
}

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  let title = 'An error occurred'
  let message = "We're sorry, but something went wrong. Please try again later."
  let Icon = AlertCircle

  if (error instanceof AxiosError) {
    if (error.code === 'ECONNABORTED') {
      title = 'Request Timeout'
      message = 'The request took too long to complete. Please check your connection and try again.'
      Icon = Clock
    } else if (error.code === 'ERR_NETWORK') {
      title = 'Network Error'
      message = 'Unable to connect to the server. Please check your internet connection.'
      Icon = WifiOff
    } else if (error.response) {
      if (error.response.status === 404) {
        title = 'Not Found'
        message = 'The requested resource could not be found.'
      } else if (error.response.status >= 500) {
        title = 'Server Error'
        message = 'There was a problem with the server. Please try again later.'
        Icon = Server
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-destructive bg-destructive/10 p-8 text-center shadow-sm">
      <Icon className="mb-4 h-16 w-16 text-destructive" />
      <h2 className="mb-2 text-2xl font-semibold text-destructive">{title}</h2>
      <p className="mb-4 text-destructive-foreground">{message}</p>
      {error instanceof AxiosError && error.response && (
        <div className="text-sm text-destructive-foreground/80">
          <p>Status: {error.response.status}</p>
          <p>Message: {error.response.data?.message || error.message}</p>
        </div>
      )}
    </div>
  )
}
