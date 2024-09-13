import { PropsWithChildren } from 'react'
import { ReactQueryProvider } from './react-query-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  )
}
