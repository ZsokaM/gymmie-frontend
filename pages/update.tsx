import Head from 'next/head'
import styled from 'styled-components'
import UpdateClass from '../components/AdminFunc/UpdateClass'

interface UpdateClassProp {
  query?: {
    id: string
  }
}

export default function update({ query }: UpdateClassProp) {
  return (
    <>
      <Head>
        <title> gymmie | Update</title>
      </Head>
      <Wrapper>
        <UpdateClass id={query?.id} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 60%;
`
