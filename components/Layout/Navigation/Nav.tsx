import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import NavElements from './NavElements'

interface NavProp {
  toggle: () => void
}
export default function Nav({ toggle }: NavProp) {
  return (
    <>
      <HamburgerIcon onClick={toggle} />
      <NavMenu>
        <NavElements />
      </NavMenu>
    </>
  )
}

const NavMenu = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;

  ${({ theme }) => theme.mediaQueries.large} {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`

const HamburgerIcon = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.text.primary};
  ${({ theme }) => theme.mediaQueries.medium} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2em;
    cursor: pointer;
  }
`
