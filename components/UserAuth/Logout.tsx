import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { SIGN_OUT_MUTATION, CURRENT_USER_QUERY } from '../../lib/APIs/Auth'
import { NavButton } from '../Layout/Navigation/NavElements'

export default function LogOut() {
  const router = useRouter()
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  const handleSignOut = () => {
    signout()
    router.push('/')
  }
  return (
    <NavButton as="button" type="button" onClick={handleSignOut}>
      Logout
    </NavButton>
  )
}
