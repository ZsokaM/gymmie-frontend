import React, { createContext, useContext, useState } from 'react'

export const ModalStateContext = createContext({})

interface ModalInterface {
  children: React.ReactNode
}
function ModalContextProvider({ children }: ModalInterface) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalText, setModalText] = useState('')
  const [modalType, setModalType] = useState('success')

  const toggleModal = () => {
    setModalIsOpen((prevState) => !prevState)
  }

  const showModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalStateContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        modalText,
        setModalText,
        modalType,
        setModalType,
        toggleModal,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalStateContext.Provider>
  )
}

function useModal() {
  return useContext(ModalStateContext)
}

export { ModalContextProvider, useModal }
