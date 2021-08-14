import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import { CURRENT_USER_QUERY } from './User'

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`

export default function LogOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  const handleSignOut = () => {
    signout()
    Router.push({
      pathname: '/',
    })
  }
  return (
    <button type="button" onClick={handleSignOut}>
      Log Out
    </button>
  )
}
