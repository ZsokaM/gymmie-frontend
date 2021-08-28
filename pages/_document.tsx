import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
