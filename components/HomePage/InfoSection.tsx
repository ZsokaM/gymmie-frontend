import styled from 'styled-components'
import { centeredItems } from '../styles/HelperStyles'

interface InfoSectionProps {
  imgStart: boolean
}
export default function InfoSection({ imgStart }: InfoSectionProps) {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column>
              <ArticleWrap imgStart={imgStart}>
                <TopLine>Full Body Workouts</TopLine>
                <Heading>A CATCHY TITLE</Heading>
                <SubText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sagittis facilisis libero sed malesuada. Sed
                  imperdiet id tortor ut euismod. Nam porttitor vestibulum
                  euismod. Integer quis tellus euismod, elementum felis non,
                  dictum augue. Vestibulum ut turpis quis turpis semper
                  tincidunt interdum non est. Morbi aliquet libero et nulla
                  vehicula imperdiet. Nam auctor porta suscipit. Fusce vel
                  tellus auctor, iaculis ligula viverra, volutpat nibh. Duis
                  malesuada quam eu ipsum porttitor pretium. Nunc sit amet
                  ligula eleifend, tempor lorem ut, dignissim mi. Praesent
                  congue orci et egestas pretium. Donec vehicula felis et arcu
                  tristique ullamcorper. Curabitur nisl urna, volutpat in ante
                  nec, interdum fringilla diam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque tempus tempor tortor eget
                  posuere. Mauris hendrerit purus a metus sollicitudin congue.
                </SubText>
              </ArticleWrap>
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
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 3rem 0;

  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1rem;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1rem;
  }
`
const InfoRow = styled.section<InfoSectionProps>`
  ${centeredItems};
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
  justify-content: space-evenly;
  color: ${({ theme }) => theme.text.primary};

  ${({ theme }) => theme.mediaQueries.small} {
    flex-direction: column;
  }
`

const Column = styled.article`
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  ${centeredItems};
  justify-content: space-around;
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
const SubText = styled.p`
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 3rem;
  font-size: 1.75rem;
  line-height: 3rem;
  text-align: justify;
`
const ImgWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
`

const ArticleWrap = styled.article<InfoSectionProps>`
  margin: ${({ imgStart }) => (imgStart ? '0 0 0 20%' : '0 20% 0 0')};

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 0;
  }
`
