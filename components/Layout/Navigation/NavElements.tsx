import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'
import LogOut from '../../UserAuth/Logout'
import { useUser } from '../../UserAuth/User'
import { centeredItems } from '../../styles/HelperStyles'

export default function NavElements() {
  const user = useUser()

  return (
    <>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/schedule" passHref>
        <StyledLink>Class Schedule</StyledLink>
      </Link>
      {!user && (
        <>
          <Link href="/login" passHref>
            <StyledLink>Login</StyledLink>
          </Link>
          <Link href="/signup" passHref>
            <StyledLink>Sign up</StyledLink>
          </Link>
        </>
      )}

      {user && (
        <>
          <Link href="/account" passHref>
            <StyledLink>My account</StyledLink>
          </Link>
          <Link href="/admin" passHref>
            <StyledLink>Admin</StyledLink>
          </Link>
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
        passHref
      >
        <StyledLink>Contact us</StyledLink>
      </ScrollLink>
    </>
  )
}

const StyledLink = styled.a`
  padding: 1rem 3rem;
  ${centeredItems}
  position: relative;
  font-size: 1.2em;
  font-weight: bold;
  background-color: none;
  border: 0;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1rem;
    padding: 0 1rem;
  }

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline ${({ theme }) => theme.bg.quarternary};
    text-decoration-thickness: 20%;
    text-underline-offset: 0.3em;
  }

  ${({ theme }) => theme.mediaQueries.medium} {
    display: none;
  }
`

export const NavButton = styled(StyledLink)`
  color: ${({ theme }) => theme.text.primary};
  background-color: transparent;
`
