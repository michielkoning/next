import { FunctionComponent } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: FunctionComponent = () => {
  return (
    <Html lang="en">

      <link rel="manifest" href="/manifest.json" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document