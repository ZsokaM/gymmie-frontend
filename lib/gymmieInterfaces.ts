import React from 'react'

export interface SportClassInterface {
  id: string
  name: string
  freeSpots: number
  available: number
  year: number
  week: number
  day: number
  startTime: number
  teacher: string
  duration: number
  users?: string[]
  bookings?: string[]
}

export interface AllClassesInterface {
  allSportClasses: SportClassInterface[]
}

export interface AuthInterface {
  name?: string
  email: string
  password?: string
}

export interface ModalProps {
  modalIsOpen: boolean
  setModalIsOpen: () => void
  modalText: string
  setModalText: React.Dispatch<React.SetStateAction<string>>
  toggleModal: () => void
  showModal: () => void
  closeModal: () => void
  catchError: () => {}
}

export enum Direction {
  PREVIOUS,
  NEXT,
}
