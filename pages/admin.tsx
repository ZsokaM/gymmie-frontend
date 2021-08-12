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
        <section>
          <h2>Create class</h2>
          <CreateClass />
        </section>
        <section>
          <h2>Update class</h2>
          <UpdateClass id={query.id} />
        </section>
      </Wrapper>
      <AllClasses />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
`
