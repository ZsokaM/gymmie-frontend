import styled, { ThemeContext } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { ModalProps } from '../../lib/gymmieInterfaces'
import { centeredItems } from '../styles/HelperStyles'

export default function Modal({
  modalIsOpen,
  modalType,
  modalText,
  closeModal,
}: ModalProps) {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? `translateY(0%)` : `translateY(-100%)`,
  })

  return (
    <>
      {modalIsOpen && (
        <Background modalType={modalType}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>{modalText}</ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={closeModal} />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  )
}

const Background = styled.div<Pick<ModalProps, 'modalType'>>`
  width: 100%;
  height: 100%;
  background-color: ${({ modalType }) =>
    modalType === 'success' ? '#7ECA9C' : '#EFB7B7'};
  position: fixed;
  ${centeredItems}
  justify-content: center;
`

const ModalWrapper = styled.div`
  width: 300px;
  height: 100px;
  background-color: ${({ theme }) => theme.bg.secondary};
  ${centeredItems};
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalContent = styled.div`
  ${centeredItems};
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.text.primary};
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background-color: ${({ theme }) => theme.bg.quarternary};
    color: ${({ theme }) => theme.text.primary};
    border: none;
  }
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
