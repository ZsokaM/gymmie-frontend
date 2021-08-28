import styled, { ThemeContext } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { ModalProps } from '../../lib/gymmieInterfaces'
import { borderRadius, centeredItems } from '../styles/HelperStyles'
import { SmallFormButton } from '../styles/ButtonStyle'

export default function Modal({
  modalIsOpen,
  modalText,
  closeModal,
}: Partial<ModalProps>) {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: 1,
    transform: modalIsOpen ? `translateY(0%)` : `translateY(-100%)`,
  })

  // const handleClick = () => {
  //   setClicked(true)
  // }

  return (
    <>
      {modalIsOpen && (
        <Background>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>{modalText}</ModalContent>
              <ModalButtonWrapper>
                <ModalButton type="button" onClick={closeModal}>
                  Cancel
                </ModalButton>
                <ModalButton
                  type="button"
                  onClick={() => console.log('bananas')}
                >
                  Continue
                </ModalButton>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={closeModal}
                />
              </ModalButtonWrapper>
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efb7b7;
  position: fixed;
  ${centeredItems};
  justify-content: center;
`

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg.secondary};
  ${centeredItems};
  ${borderRadius}
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 10;
  padding: 5rem;
`

const ModalContent = styled.div`
  ${centeredItems};
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.text.primary};
  margin: 1rem;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

const ModalButton = styled(SmallFormButton)`
  background-color: #efb7b7;
`
const ModalButtonWrapper = styled.div`
  ${centeredItems}
`
