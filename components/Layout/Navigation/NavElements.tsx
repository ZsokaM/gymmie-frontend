import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import LogOut from '../../UserAuth/Logout'
import { useUser } from '../../UserAuth/User'

export default function NavElements() {
  const user = useUser()

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/schedule">Class Schedule</Link>
      {!user && (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign up</Link>
        </>
      )}

      {user && (
        <>
          <Link href="/account">Account</Link>
          <Link href="/admin">Admin</Link>
          <LogOut />
        </>
      )}
      <ScrollLink
        to="contact"
        smooth
        duration={500}
        spy
        exact="true"
        offset={-80}
      >
        Contact Us
      </ScrollLink>
    </>
  )
}
