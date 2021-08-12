import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

//add conditions, if on home page use links ad scroll links, otherwise use them as links to components
export default function NavElements() {
  return (
    <>
      <ScrollLink
        to="class-types"
        smooth
        duration={500}
        spy
        exact="true"
        offset={-80}
      >
        Class Types
      </ScrollLink>
      <ScrollLink
        to="prices"
        smooth
        duration={500}
        spy
        exact="true"
        offset={-80}
      >
        Prices
      </ScrollLink>
      <Link href="/schedule">Class Schedule</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
      <Link href="/account">Account</Link>
      <Link href="/admin">Admin</Link>
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
