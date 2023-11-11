import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { createGlobalStyle } from 'styled-components'
import "./../assets/css/app.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
