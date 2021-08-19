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

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1.2em;
    font-weight: bold;
    background: none;
    border: 0;
    cursor: pointer;
    ${({ theme }) => theme.mediaQueries.small} {
      font-size: 10px;
      padding: 0 10px;
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
  }
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
