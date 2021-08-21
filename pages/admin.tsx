import styled from 'styled-components'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import CreateClass from '../components/AdminFunc/CreateClass'
import AllClasses from '../components/AdminFunc/AllClasses'
import { useUser } from '../components/UserAuth/User'

export default function admin() {
  const user = useUser()
  useEffect(() => {
    if (!user) {
      Router.push('/login')
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
  width: 100%;
  &:not(:last-child) {
    margin-right: 3rem;
  }

  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 2rem;
  }
`
