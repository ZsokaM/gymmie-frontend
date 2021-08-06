import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

export default function NavElements() {
  return (
    <>
      <ScrollLink to="class-types">Class Types</ScrollLink>
      <ScrollLink to="prices">Prices</ScrollLink>
      <Link href="/schedule">Class Schedule</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
      <Link href="/account">Account</Link>
      <ScrollLink to="contact">Contact Us</ScrollLink>
    </>
  )
}
