import styled from 'styled-components'
import Head from 'next/head'
import CreateClass from '../components/AdminFunc/CreateClass'
import AllClasses from '../components/AdminFunc/AllClasses'

export default function admin() {
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
