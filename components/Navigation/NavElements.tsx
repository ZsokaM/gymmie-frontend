import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

export default function NavElements() {
  return (
    <>
      <ScrollLink
        to="class-types"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-80}
      >
        Class Types
      </ScrollLink>
      <ScrollLink
        to="prices"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-80}
      >
        Prices
      </ScrollLink>
      <Link href="/schedule">Class Schedule</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
      <Link href="/account">Account</Link>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        exact={true}
        offset={-80}
      >
        Contact Us
      </ScrollLink>
    </>
  )
}
