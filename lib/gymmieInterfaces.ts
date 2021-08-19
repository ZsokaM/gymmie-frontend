export interface InputsProps {
  id?: string
  name?: string
  freeSpots?: number
  available?: number
  year?: number
  week?: number
  day?: number
  startTime?: number
  teacher?: string
  duration?: number
  users?: string[]
  email?: string
  password?: string
}

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
}

export interface ModalProps {
  modalIsOpen: boolean
  setModalIsOpen: () => void
  modalText: string
  setModalText: () => void
  modalType: string
  setModalType: () => void
  toggleModal: () => void
  showModal: () => void
  closeModal: () => void
  successMsgModal: () => void
  errorMsgModal: () => void
}

export enum Direction {
  PREVIOUS,
  NEXT,
}
