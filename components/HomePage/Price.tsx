import styled from 'styled-components'
import Image from 'next/image'
import { centeredItems, borderRadius } from '../styles/HelperStyles'

export default function Price() {
  return (
    <PriceContainer id="prices">
      <PriceHeader>Memberships and Prices</PriceHeader>
      <PriceWrapper>
        <PriceCard>
          <Image
            src="/gloves.jpg"
            width={256}
            height={192}
            alt="membership type photo"
          />
          <PriceType>One class</PriceType>
          <PriceDetails>
            Book one class and have a taste for &euro;13
          </PriceDetails>
        </PriceCard>
        <PriceCard>
          <Image
            src="/gloves.jpg"
            width={256}
            height={192}
            alt="membership type photo"
          />
          <PriceType>10 class pass</PriceType>
          <PriceDetails>
            Enjoy 10 sweaty classes within 3 months for &euro;110
          </PriceDetails>
        </PriceCard>
        <PriceCard>
          <Image
            src="/gloves.jpg"
            width={256}
            height={192}
            alt="membership type photo"
          />
          <PriceType>Monthly Unlimited</PriceType>
          <PriceDetails>
            Book as many classes as you want for a month for &euro;60
          </PriceDetails>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  )
}

const PriceContainer = styled.section`
  height: 100%;
  ${centeredItems};
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg.primary};
  padding: 2rem;
`
const PriceWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  ${centeredItems};
  justify-content: space-around;
  padding: 0 3.15rem;

  ${({ theme }) => theme.mediaQueries.small} {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const PriceCard = styled.article`
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  ${centeredItems};
  flex-direction: column;
  ${borderRadius};
  height: 350px;
  width: 350px;
  padding: 30px;
  margin: 5px;
  box-shadow: 0 1px 3px ${({ theme }) => theme.bg.secondary};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
const PriceHeader = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.text.primary};
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`
const PriceType = styled.h3`
  font-size: 2rem;
  margin: 1.5rem;
`
const PriceDetails = styled.p`
  font-size: 1.5rem;
  text-align: center;
`
