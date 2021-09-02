import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from '../../lib/APIs/Auth'
import { WEEKLY_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import { ADD_TO_BOOKINGS_MUTATION } from '../../lib/APIs/SportClassMutations'
import { decimalToTime } from '../../lib/dateHelpers'
import { useUser } from '../UserAuth/User'
import { SportClassInterface } from '../../lib/gymmieInterfaces'
import { centeredItems } from '../styles/HelperStyles'

interface SportClassCardProp {
  classData: SportClassInterface
}
export default function SportClassCard({ classData }: SportClassCardProp) {
  const user = useUser()
  const [addToBookings, { data, error, loading }] = useMutation(
    ADD_TO_BOOKINGS_MUTATION,
    {
      variables: { id: classData.id },
      refetchQueries: [
        { query: CURRENT_USER_QUERY },
        { query: WEEKLY_CLASSES_QUERY },
      ],
    },
  )

  const handleClick = () => {
    if (!user) return null
    if (classData.freeSpots === 0) return alert('This class is full')
    if (confirm('Confirm booking')) {
      addToBookings()
    }
  }

  return (
    <ClassCardContainer onClick={handleClick}>
      <SportClassName>{classData.name}</SportClassName>
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
const SportClassName = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`
