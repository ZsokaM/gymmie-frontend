import styled from 'styled-components'
import { currentYear } from '../../lib/dateHelpers'
import { Button } from '../styles/ButtonStyle'
import { centeredItems } from '../styles/HelperStyles'

interface FooterProps {
  toggleTheme: () => void
}
export default function Footer({ toggleTheme }: FooterProps) {
  return (
    <FooterContainer id="contact">
      <Button onClick={toggleTheme}>Light/Dark</Button>
      <FooterWrapper>
        <h3>
          Special thanks to Michael, Sam for their patience and support &hearts;
        </h3>
        <p>
          Video by Ron Lach from Pexels. Photos by{' '}
          <a href="[https://unsplash.com/@schimiggy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText](https://unsplash.com/@schimiggy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)">
            Alexandra Tran
          </a>{' '}
          on{' '}
          <a href="[https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)">
            Unsplash{' '}
          </a>
          and by{' '}
          <a href="https://unsplash.com/@golfarisa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Arisa Chattasa
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/sport-equipment?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
        <p>
          Do not try to contact gymmie, gymmie doesn't exist! &copy;{' '}
          {currentYear}
        </p>
      </FooterWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg.secondary};
  margin-top: 3rem;
  height: 10%;
  color: ${({ theme }) => theme.text.primary};
  padding: 5rem;
  ${centeredItems};
  flex-direction: column;
  justify-content: center;
`
const FooterWrapper = styled.section`
  ${centeredItems}
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
