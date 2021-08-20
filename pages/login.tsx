import Head from 'next/head'
import styled from 'styled-components'
import Login from '../components/UserAuth/Login'
import RequestReset from '../components/UserAuth/RequestReset'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title> gymmie | Login</title>
      </Head>
      <Wrapper>
        <article>
          <Login />
        </article>
        <article>
          <RequestReset />
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  width: 60%;
`
