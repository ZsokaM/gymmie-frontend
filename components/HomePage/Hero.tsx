import styled from 'styled-components'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { Button } from '../styles/ButtonStyle'

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBg autoPlay loop muted src="/video.mp4" />
      </HeroBackground>
      <HeroText>
        <HeroHeader>welcome to gymmie</HeroHeader>
        <HeroSubline>Get ready to sweat</HeroSubline>
        <Button>
          <Link href="/schedule">BOOK NOW</Link>
        </Button>
        <ScrollWrapper>
          <Button>
            <ScrollLink
              to="class-types"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Class Types
            </ScrollLink>
          </Button>
          <Button>
            <ScrollLink
              to="prices"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Prices
            </ScrollLink>
          </Button>
        </ScrollWrapper>
      </HeroText>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 600px;
  position: relative;
  z-index: 1;
`
const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: ${({ theme }) => theme.bg.secondary};
  opacity: 30%;
`
const HeroText = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroHeader = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 48px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 32px%;
  }
`
const HeroSubline = styled.p`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`
const ScrollWrapper = styled.div`
  display: flex;
`
