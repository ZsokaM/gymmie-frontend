import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { decimalToTime } from '../../lib/dateHelpers'
import { CURRENT_USER_QUERY } from '../UserAuth/User'
import { useUser } from '../UserAuth/User'

const ADD_TO_BOOKINGS_MUTATION = gql`
  mutation ADD_TO_BOOKINGS_MUTATION($id: ID!) {
    addToBookings(sportClassId: $id) {
      id
    }
  }
`

export default function SportClassCard({ classData }) {
  const [addToBookings, { data, error, loading }] = useMutation(
    ADD_TO_BOOKINGS_MUTATION,
    {
      variables: { id: classData.id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    },
  )
  //@TODO: replace with nice modals
  const user = useUser()
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

const ClassCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: lightcoral;
  margin: 5px;
  box-shadow: 3px 3px 2px 1px lightblue;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  a {
    color: purple;
  }
  a:hover {
    color: blue;
    text-decoration: underline;
  }
`
