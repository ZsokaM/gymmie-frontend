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
  setModalText: () => void
  toggleModal: () => void
  showModal: () => void
  closeModal: () => void
  catchError: () => void
}

export enum Direction {
  PREVIOUS,
  NEXT,
}
