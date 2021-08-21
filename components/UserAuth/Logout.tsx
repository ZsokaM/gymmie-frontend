import { useMutation } from '@apollo/client'
import Router from 'next/router'
import { SIGN_OUT_MUTATION, CURRENT_USER_QUERY } from '../../lib/APIs/Auth'
import { NavButton } from '../Layout/Navigation/NavElements'

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
