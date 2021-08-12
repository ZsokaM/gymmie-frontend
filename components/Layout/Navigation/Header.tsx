import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'

export default function Header({ toggle }) {
  return (
    <HeaderStyles>
      <Logo>
        <Link href="/">gymmie</Link>
      </Logo>
      <Nav toggle={toggle} />
    </HeaderStyles>
  )
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
`

const HeaderStyles = styled.header`
  height: 80px;
  border-bottom: 1.5px solid ${({ theme }) => theme.bg.quarternary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.primary};
`
