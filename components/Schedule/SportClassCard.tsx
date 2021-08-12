import styled from 'styled-components'
import { decimalToTime } from '../../lib/dateHelpers'

export default function SportClassCard({ classData }) {
  return (
    <ClassCardContainer>
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
