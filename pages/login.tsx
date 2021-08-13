import Head from 'next/head'
import Login from '../components/UserAuth/Login'
import RequestReset from '../components/UserAuth/RequestReset'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> gymmie | Login</title>
      </Head>
      <Login />
      <RequestReset />
    </>
  )
}
