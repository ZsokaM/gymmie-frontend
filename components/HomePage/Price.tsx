import styled from 'styled-components'

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

const PriceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg.primary};
`
const PriceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
const PriceCard = styled.div`
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  height: 250px;
  width: 250px;
  padding: 30px;
  margin: 5px;
  box-shadow: 0 1px 3px ${({ theme }) => theme.bg.secondary};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
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

  @media (max-width: 480px) {
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
