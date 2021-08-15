import styled, { ThemeContext } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'
import { ModalProps } from '../../lib/gymmieInterfaces'

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
      {modalIsOpen ? (
        <Background type={modalType}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>{modalText}</ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={closeModal} />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  background: ${({ modalType }) =>
    modalType === 'success' ? '#7ECA9C' : '#EFB7B7'};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 300px;
  height: 100px;
  background: ${({ theme }) => theme.bg.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.text.primary};
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: ${({ theme }) => theme.bg.quarternary};
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
