import React, { createContext, useContext, useState } from 'react'

const ModalStateContext = createContext({})

interface ModalInterface {
  children: React.ReactNode
}
function ModalContextProvider({ children }: ModalInterface) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalText, setModalText] = useState('')

  const toggleModal = () => {
    setModalIsOpen((prevState) => !prevState)
  }

  const showModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const catchError = (err: string) => {
    setModalText(`Something went wrong, ${err}`)
    showModal()
  }
  return (
    <ModalStateContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        modalText,
        setModalText,
        toggleModal,
        showModal,
        closeModal,
        catchError,
      }}
    >
      {children}
    </ModalStateContext.Provider>
  )
}

function useModal() {
  return useContext(ModalStateContext)
}

export { ModalStateContext, ModalContextProvider, useModal }
