import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { decimalToTime } from '../../lib/dateHelpers'
import { CURRENT_USER_QUERY } from '../UserAuth/User'
import { useUser } from '../UserAuth/User'
import { useModal } from '../Modals/ModalContext'

const ADD_TO_BOOKINGS_MUTATION = gql`
  mutation ADD_TO_BOOKINGS_MUTATION($id: ID!) {
    addToBookings(sportClassId: $id) {
      id
    }
  }
`

interface SportClassCardProp {
  classData: {
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
  }
}
export default function SportClassCard({ classData }: SportClassCardProp) {
  const user = useUser()
  const modal = useModal()
  const [addToBookings, { data, error, loading }] = useMutation(
    ADD_TO_BOOKINGS_MUTATION,
    {
      variables: { id: classData.id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    },
  )
  //@TODO: replace with nice modals

  const handleClick = () => {
    if (!user) {
      modal.setModalText('You need to log in to book a class')
      modal.setModalType('error')
      modal.showModal()
    }

    if (classData.freeSpots === 0) {
      modal.setModalText('This class is full')
      modal.setModalType('error')
      modal.showModal()
    }

    if (confirm('Confirm booking')) {
      modal.setModalText('Class was added to your schedule')
      modal.setModalType('success')
      modal.showModal()
      addToBookings()
    }
  }

  return (
    <ClassCardContainer onClick={handleClick}>
      <div>{classData.name}</div>
      <div>{decimalToTime(classData.startTime)}</div>
      <div>{classData.teacher}</div>
      <div>{classData.duration} min</div>
    </ClassCardContainer>
  )
}

const ClassCardContainer = styled.article`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  margin: 5px;
  box-shadow: 3px 3px 2px 1px lightblue;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`
