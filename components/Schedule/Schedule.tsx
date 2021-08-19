import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SportClassCard from './SportClassCard'
import { getWeek, weekDayNames, currentYear } from '../../lib/dateHelpers'
import { SportClassInterface, Direction } from '../../lib/gymmieInterfaces'

export const ALL_CLASSES_QUERY = gql`
  query ALL_CLASSES_QUERY {
    allSportClasses {
      id
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
    }
  }
`

export default function Schedule() {
  const [currentWeekOfTheYear, setCurrentWeekOfTheYear] = useState(getWeek())
  const [weekToDisplay, setWeekToDisplay] = useState(currentWeekOfTheYear)

  useEffect(() => {
    setCurrentWeekOfTheYear(getWeek())
  }, [])

  let { data, error, loading } = useQuery(ALL_CLASSES_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const changeWeek = (direction: Direction) => {
    direction === Direction.PREVIOUS
      ? setWeekToDisplay((prevState) => prevState - 1)
      : setWeekToDisplay((prevState) => prevState + 1)
  }
  const FilterClassToDay = (dayNumber: number) => {
    return data.allSportClasses
      .filter(
        (sportClass: SportClassInterface) =>
          sportClass.year === currentYear &&
          sportClass.week === weekToDisplay &&
          sportClass.day === dayNumber,
      )
      .sort(
        (
          sportClass1: SportClassInterface,
          sportClass2: SportClassInterface,
        ) => {
          return sportClass1.startTime - sportClass2.startTime
        },
      )
      .map((sportClass: SportClassInterface) => (
        <SportClassCard key={sportClass.id} classData={sportClass} />
      ))
  }

  return (
    <>
      <Header>
        <SmallButton
          type="button"
          onClick={() => changeWeek(Direction.PREVIOUS)}
          disabled={weekToDisplay < currentWeekOfTheYear - 1}
        >
          Previous Week
        </SmallButton>
        <h2>
          Week {weekToDisplay} in {currentYear}
        </h2>
        <SmallButton
          type="button"
          onClick={() => changeWeek(Direction.NEXT)}
          disabled={weekToDisplay > currentWeekOfTheYear + 1}
        >
          Next Week
        </SmallButton>
      </Header>

      <TableContainer>
        <TableHeader>
          <TableRow>
            {weekDayNames.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            {weekDayNames.map((_, index) => (
              <TableField key={index}>{FilterClassToDay(index)}</TableField>
            ))}
          </TableRow>
        </tbody>
      </TableContainer>
    </>
  )
}

const Header = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    color: ${({ theme }) => theme.text.primary};
  }
`
const TableContainer = styled.table`
  margin: 0 auto;
  min-height: 800px;
  width: 95%;
`

const TableHeader = styled.thead`
  height: 40px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: capitalize;
`
const TableRow = styled.tr`
  height: 80%;
`
const TableField = styled.td`
  height: 100px;
  width: 200px;
  background-color: ${({ theme }) => theme.bg.quarternary};
  vertical-align: top;
`

const SmallButton = styled.button`
  border-radius: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};
  width: 120px;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, .2);

  &:disabled{
    background: grey;
    color: darkgray
  }

  &:hover {
    background: ${({ theme }) => theme.bg.tertiary}
`
