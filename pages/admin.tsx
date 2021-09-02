import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CreateClass from '../components/AdminFunc/CreateClass'
import AllClasses from '../components/AdminFunc/AllClasses'
import { useUser } from '../components/UserAuth/User'

export default function admin() {
  const router = useRouter()
  const user = useUser()
  useEffect(() => {
    if (!user?.role?.canManageUsers) {
      router.push('/login')
    }
  }, [user])

  return (
    <>
      <Head>
        <title>gymmie | Admin page </title>
      </Head>

      <Wrapper>
        <ItemContainer>
          <CreateClass />
        </ItemContainer>
      </Wrapper>
      <AllClasses />
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.medium} {
    flex-direction: column;
  }
`
const ItemContainer = styled.article`
  margin: 0 auto;
  width: 70%;
  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 2rem;
    width: 100%;
  }
`
