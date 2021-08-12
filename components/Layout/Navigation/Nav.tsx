import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import NavElements from './NavElements'

export default function Nav({ toggle }) {
  return (
    <>
      <HamburgerIcon onClick={toggle} />
      <NavMenu>
        <NavElements />
      </NavMenu>
    </>
  )
}

// todo: add styles
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
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline ${({ theme }) => theme.bg.quarternary};
      text-decoration-thickness: 20%;
      text-underline-offset: 0.3em;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }

    @media (max-width: 500px) {
      display: none;
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`
const HamburgerIcon = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.text.primary};
  @media (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2em;
    cursor: pointer;
  }
`
