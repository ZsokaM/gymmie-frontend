import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import { NavButton } from '../Layout/Navigation/NavElements'
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
    <NavButton as="button" type="button" onClick={handleSignOut}>
      Logout
    </NavButton>
  )
}
