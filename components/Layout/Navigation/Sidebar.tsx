import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import NavElements from './NavElements'

interface SideBarProps {
  isOpen: boolean
  toggle: () => void
}
export default function Sidebar({ isOpen, toggle }: SideBarProps) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <NavElements />
      </SidebarWrapper>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside<Pick<SideBarProps, 'isOpen'>>`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  background: ${({ theme }) => theme.bg.primary};
  opacity: ${({ isOpen }) => (isOpen ? '90%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.text.primary};
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;
  width: 100%;

  a,
  button {
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1.2em;
    font-weight: bold;
    background: none;
    border: 0;
    cursor: pointer;

    &:hover,
    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.text.primary};
    }
  }
`
