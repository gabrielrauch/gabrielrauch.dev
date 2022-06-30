import type { AppProps } from 'next/app'
import GlobalCss from 'global/Styles/GlobalStyles'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCss />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
