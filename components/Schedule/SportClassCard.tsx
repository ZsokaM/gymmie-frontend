import styled from 'styled-components'

export default function SportClassCard({ classData }) {
  return (
    <ClassCardContainer key={classData.id}>
      <div>{classData.name}</div>
      <div>{classData.startTime}</div>
      <div>{classData.teacher}</div>
      <div>{classData.duration}</div>
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
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`
