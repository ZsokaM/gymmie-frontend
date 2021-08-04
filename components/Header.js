import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="navbar">
        <Logo>
          <Link href="/">gymmie</Link>
        </Logo>
        <Nav />
      </div>
    </HeaderStyles>
  );
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
`;

const HeaderStyles = styled.header`
  .navbar {
    border-bottom: 3px solid var(--darkest-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
