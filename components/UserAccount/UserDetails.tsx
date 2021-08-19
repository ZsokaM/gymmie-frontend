import styled from 'styled-components'
import { FormButton } from '../FormElements/formElementsStyle'
import { useUser } from '../UserAuth/User'

export default function UserDetails() {
  const user = useUser()
  return (
    <UserCard>
      <UserName>{user.name}</UserName>
      <Achievements>
        <UserParag>
          You have attended {user.bookings.length} classes since you joined
        </UserParag>
        <Membership>current membership info</Membership>
      </Achievements>
      <FormButton>delete account</FormButton>
    </UserCard>
  )
}

const UserCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.bg.secondary};
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  padding: 1rem;
`

const UserName = styled.h2`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Achievements = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 5px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  background-color: ${({ theme }) => theme.bg.primary};
  margin: 1rem;
`
