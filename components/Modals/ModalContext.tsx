import React, { createContext, useContext, useState } from 'react'
import Modal from './Modal'

const ModalStateContext = createContext({})

interface ModalInterface {
  children: React.ReactNode
}
function ModalContextProvider({ children }: ModalInterface) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalText, setModalText] = useState('')
  //const [functionToExecute, setFunctionToExecute] = useState(null)
  //const [clicked, setClicked] = useState(false)

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

  // const changeFnToExecute = (fn) => {
  //   setFunctionToExecute(fn)
  // }

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
        //clicked,
        //setClicked,
        // functionToExecute,
        // setFunctionToExecute,
        // changeFnToExecute,
      }}
    >
      <Modal
        modalIsOpen={modalIsOpen}
        modalText={modalText}
        closeModal={closeModal}
      />
      {children}
    </ModalStateContext.Provider>
  )
}

function useModal() {
  return useContext(ModalStateContext)
}

export { ModalStateContext, ModalContextProvider, useModal }
