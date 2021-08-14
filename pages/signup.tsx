import Head from 'next/head'
import styled from 'styled-components'
import SignUp from '../components/UserAuth/SignUp'
export default function SignUpPage() {
  return (
    <>
      <Head>
        <title> gymmie | Signup</title>
      </Head>
      <Wrapper>
        <SignUp />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`
