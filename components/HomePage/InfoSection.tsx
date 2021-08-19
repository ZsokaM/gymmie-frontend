import styled from 'styled-components'

interface InfoSectionProps {
  id?: string
  imgStart: boolean
}
export default function InfoSection({ id, imgStart }: InfoSectionProps) {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column>
              <TextWrapper>
                <TopLine>topline</TopLine>
                <Heading>heading</Heading>
                <Subtitle>subtitle</Subtitle>
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrap>
                <Img
                  src="/shoe.jpeg"
                  alt="shoe section image"
                  title="shoe on yoga mat"
                />
              </ImgWrap>
            </Column>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

const InfoContainer = styled.section`
  padding: 2rem;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.secondary};

  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1rem;
`
const InfoRow = styled.section<Pick<InfoSectionProps, 'imgStart'>>`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text.primary};

  ${({ theme }) => theme.mediaQueries.small} {
    flex-direction: column;
  }
`

const Column = styled.article`
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

  ${({ theme }) => theme.mediaQueries.small} {
    font-size: 2rem;
  }
`
const Subtitle = styled.p`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 3rem;
  font-size: 2rem;
  line-height: 1.5rem;
`
const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
  margin: 0 0 0.75rem 0;
  padding-right: 0;
`
