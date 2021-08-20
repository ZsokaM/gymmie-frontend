import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import { centeredItems } from '../../styles/HelperStyles'

interface HeaderProp {
  toggle: () => void
}
export default function Header({ toggle }: HeaderProp) {
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
  ${centeredItems};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg.primary};
  position: sticky;
  top: 0;
`
