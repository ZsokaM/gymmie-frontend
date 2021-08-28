import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '../styles/ButtonStyle'
import { centeredItems } from '../styles/HelperStyles'

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
      </HeroText>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.bg.primary};
  ${centeredItems};
  justify-content: center;
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
  background-color: ${({ theme }) => theme.bg.secondary};
  opacity: 30%;
`
const HeroText = styled.div`
  z-index: 2;
  width: 100%;
  position: absolute;
  padding: 1rem 3rem;
  ${centeredItems}
  flex-direction: column;
`

const HeroHeader = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 3rem;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2rem;
  }
`
const HeroSubline = styled.p`
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.5rem;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.small} {
    font-size: 1.1rem;
  }
`
