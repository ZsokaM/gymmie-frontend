import styled from 'styled-components'
import { FormButton } from '../styles/ButtonStyle'
import { useUser } from '../UserAuth/User'
import { centeredItems, borderRadius } from '../styles/HelperStyles'

export default function UserDetails() {
  const user = useUser()
  if (!user) return null
  return (
    <UserCard>
      <Circle>
        <UserName>{user.name}</UserName>
      </Circle>

      <Achievements>
        <UserParag>
          You have booked {user.bookings.length} classes since you joined
        </UserParag>
        <Membership>current membership info</Membership>
      </Achievements>
      <FormButton>delete account</FormButton>
    </UserCard>
  )
}

const UserCard = styled.article`
  ${centeredItems};
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.bg.secondary};
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  padding: 2rem;
`

const Circle = styled.div`
  border-radius: 50%;
  margin: 1rem;
  width: 150px;
  height: 150px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  background-color: ${({ theme }) => theme.bg.primary};
  ${centeredItems};
  justify-content: center;
`
const UserName = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-size: 2rem;
`

const Achievements = styled.article`
  ${centeredItems};
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-content: center;
`
const UserParag = styled.section`
  font-size: 2rem;
  color: ${({ theme }) => theme.text.primary};
  &:last-child {
    margin-bottom: 2rem;
  }
`

const Membership = styled.div`
  width: 50%;
  height: 100px;
  ${borderRadius};
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  background-color: ${({ theme }) => theme.bg.primary};
  margin: 1rem;
`
