import styled from 'styled-components'

//todo: add dynamic content based on database class descriptions
export default function InfoSection({ id, imgStart }) {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column imgStart={imgStart}>
              <TextWrapper>
                <TopLine>topline</TopLine>
                <Heading>heading</Heading>
                <Subtitle>subtitle</Subtitle>
              </TextWrapper>
            </Column>
            <Column imgStart={imgStart}>
              <ImgWrap imgStart={imgStart}>
                <Img src="/shoe.jpeg" />
              </ImgWrap>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

const InfoContainer = styled.div`
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};

  @media (max-width: 700px) {
    padding: 100px 0;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`
const InfoRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text.primary};

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const TextWrapper = styled.div`
  padding-top: 0%;
  padding-bottom: 60px;
`
const TopLine = styled.p`
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
`
const Heading = styled.h2`
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 4rem;
  font-size: 4rem;
  line-height: 1.1;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`
const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.primary};
  max-width: 440px;
  margin-bottom: 3rem;
  font-size: 2rem;
  line-height: 24px;
`
const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 60%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
