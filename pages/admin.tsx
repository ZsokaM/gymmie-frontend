import styled from 'styled-components'
import { useState } from 'react'
import Head from 'next/head'
import CreateClass from '../components/AdminFunc/CreateClass'
import UpdateClass from '../components/AdminFunc/UpdateClass'
import AllClasses from '../components/AdminFunc/AllClasses'

interface adminProp {
  query?: {
    id: string
  }
}
export default function admin() {
  const [editClassId, setEditClassId] = useState('hello')

  function passClassId(arg) {
    setEditClassId(arg)
  }

  return (
    <>
      <Head>
        <title>gymmie | Admin page </title>
      </Head>
      <Wrapper>
        <ItemContainer>
          <CreateClass />
        </ItemContainer>
        {/* {editClassId !== 'hello' && (
          <ItemContainer>
            <UpdateClass id={editClassId} />
          </ItemContainer>
        )} */}
      </Wrapper>
      <AllClasses passClassId={passClassId} />
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
