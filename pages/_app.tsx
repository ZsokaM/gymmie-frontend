import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import '../components/styles/nprogress.css'
import withData from '../lib/withData'
import Page from '../components/Layout/Page'
import { ModalContextProvider } from '../components/Modals/ModalContext'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ModalContextProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ModalContextProvider>
    </ApolloProvider>
  )
}

// if any of the pages have a getInitialProps method on them, which they will because of
// withData, then we are going to wait and fetch it - this is for Apollo/Nextjs setup
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  try {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  } catch (err) {
    console.log(err)
  }
}

export default withData(MyApp)
