import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { decimalToTime } from '../../lib/dateHelpers'
import { CURRENT_USER_QUERY } from '../UserAuth/User'
import { useUser } from '../UserAuth/User'
import { SportClassInterface } from '../../lib/gymmieInterfaces'
import { centeredItems } from '../styles/HelperStyles'

const ADD_TO_BOOKINGS_MUTATION = gql`
  mutation ADD_TO_BOOKINGS_MUTATION($id: ID!) {
    addToBookings(sportClassId: $id) {
      id
    }
  }
`

interface SportClassCardProp {
  classData: SportClassInterface
}
export default function SportClassCard({ classData }: SportClassCardProp) {
  const user = useUser()
  const [addToBookings, { data, error, loading }] = useMutation(
    ADD_TO_BOOKINGS_MUTATION,
    {
      variables: { id: classData.id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    },
  )
  //@TODO: replace with nice modals
  const handleClick = () => {
    if (!user) return null
    if (classData.freeSpots === 0) return alert('This class is full')
    if (confirm('Confirm booking')) {
      addToBookings()
      alert('Booking was a success')
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
  ${centeredItems};
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
