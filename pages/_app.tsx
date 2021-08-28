import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import { AppContext, AppProps } from 'next/app'
import '../components/styles/nprogress.css'
import withData from '../lib/withData'
import Page from '../components/Layout/Page'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})

interface MyAppProps extends AppProps {
  apollo: any
}
function MyApp({ Component, pageProps, apollo }: any) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps: any = {}
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
