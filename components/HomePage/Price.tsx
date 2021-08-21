import styled from 'styled-components'
import { centeredItems, borderRadius } from '../styles/HelperStyles'

export default function Price() {
  return (
    <PriceContainer id="prices">
      <PriceHeader>Memberships and Prices</PriceHeader>
      <PriceWrapper>
        <PriceCard>
          <PriceIcon src="/price.jpg" />
          <PriceType>One class</PriceType>
          <PriceDetails>Book one class and have a taste for 13$</PriceDetails>
        </PriceCard>
        <PriceCard>
          <PriceIcon src="/price.jpg" />
          <PriceType>10 classes</PriceType>
          <PriceDetails>
            Enjoy 10 sweaty classes within 3 months for 110$
          </PriceDetails>
        </PriceCard>
        <PriceCard>
          <PriceIcon src="/price.jpg" />
          <PriceType>Monthly Unlimited</PriceType>
          <PriceDetails>
            Book as many classes as you want for a month for 60$
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
`
const PriceWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  ${centeredItems};
  justify-content: space-between;
  padding: 0 50px;

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
  height: 250px;
  width: 250px;
  padding: 30px;
  margin: 5px;
  box-shadow: 0 1px 3px ${({ theme }) => theme.bg.secondary};
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
const PriceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
const PriceHeader = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text.primary};
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`
const PriceType = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`
const PriceDetails = styled.p`
  font-size: 1rem;
  text-align: center;
`
