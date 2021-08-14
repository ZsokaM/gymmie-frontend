import styled from 'styled-components'
import Head from 'next/head'
import CreateClass from '../components/AdminFunc/CreateClass'
import UpdateClass from '../components/AdminFunc/UpdateClass'
import AllClasses from '../components/AdminFunc/AllClasses'

export default function admin({ query }) {
  return (
    <>
      <Head>
        <title>gymmie | Admin page </title>
      </Head>
      <Wrapper>
        <ItemContainer>
          <CreateClass />
        </ItemContainer>
        <ItemContainer>
          <UpdateClass id={query.id} />
        </ItemContainer>
      </Wrapper>
      <AllClasses />
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  padding: 2rem;
`
const ItemContainer = styled.article`
  width: 100%;
  &:not(:last-child) {
    margin-right: 3rem;
  }
`
