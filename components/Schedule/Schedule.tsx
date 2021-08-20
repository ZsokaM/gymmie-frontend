import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SportClassCard from './SportClassCard'
import { getWeek, weekDayNames, currentYear } from '../../lib/dateHelpers'
import { SportClassInterface, Direction } from '../../lib/gymmieInterfaces'
import { centeredItems } from '../styles/HelperStyles'

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
              <TableH key={day}>{day}</TableH>
            ))}
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            {weekDayNames.map((day, index) => (
              <TableField data-label={day} key={index}>
                {FilterClassToDay(index)}
              </TableField>
            ))}
          </TableRow>
        </tbody>
      </TableContainer>
    </>
  )
}

const Header = styled.section`
  margin-top: 3rem;
  ${centeredItems};
  justify-content: space-evenly;

  h2 {
    color: ${({ theme }) => theme.text.primary};
  }
`
const TableContainer = styled.table`
  margin: 0 auto;
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg.quarternary};
`

const TableHeader = styled.thead`
  height: 40px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: capitalize;
  vertical-align: center;

  ${({ theme }) => theme.mediaQueries.small} {
    display: none;
  }
`

const TableH = styled.th`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`
const TableRow = styled.tr`
  height: 80%;
  display: flex;

  ${({ theme }) => theme.mediaQueries.small} {
    flex-direction: column;
  }
`
const TableField = styled.td`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.quarternary};
  vertical-align: top;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ theme }) => theme.mediaQueries.small} {
    align-items: center;

    &:before {
      ${centeredItems}
      flex-direction: column;
      text-transform: capitalize;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.bg.secondary};
      padding: 1rem;
      content: attr(data-label);
    }
  }
`

const SmallButton = styled.button`
  border-radius: var(--borderRadius);
  background-color: ${({ theme }) => theme.bg.secondary};
  padding: 1rem;
  color: ${({ theme }) => theme.text.primary};
  width: 12rem;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  ${centeredItems};
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);

  &:disabled {
    background-color: grey;
    color: darkgray;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg.tertiary};
  }
`
