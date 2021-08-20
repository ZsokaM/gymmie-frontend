import styled from 'styled-components'
import { Button } from '../styles/ButtonStyle'
import { centeredItems } from '../styles/HelperStyles'

interface FooterProps {
  toggleTheme: () => void
}
export default function Footer({ toggleTheme }: FooterProps) {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <h2>This will be the footer with contact info etc</h2>
      </FooterWrapper>
      <Button onClick={toggleTheme}>Light/Dark</Button>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg.secondary};
  height: 30%;
  color: ${({ theme }) => theme.text.primary};
  margin-top: 2rem;
  padding: 3rem;
  ${centeredItems};
  flex-direction: column;
  justify-content: center;
`
const FooterWrapper = styled.section`
  display: flex;
  margin: 2rem;
`
