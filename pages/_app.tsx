import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'
import { theme } from '../theme/theme'
import { PortfolioProvider } from '../context/context'
import { prefix } from '../config/config'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <PortfolioProvider value={{ prefix }}>
        <Component {...pageProps} />
      </PortfolioProvider>
    </ThemeProvider>
  )
}

export default MyApp
