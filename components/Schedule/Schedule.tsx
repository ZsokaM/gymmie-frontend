import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { ALL_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import SportClassCard from './SportClassCard'
import { getWeek, weekDayNames, currentYear } from '../../lib/dateHelpers'
import { SportClassInterface, Direction } from '../../lib/gymmieInterfaces'
import { centeredItems, borderRadius } from '../styles/HelperStyles'
import { FormButton } from '../styles/ButtonStyle'
import {
  FlexHead,
  FlexTable,
  Flextd,
  FlexTh,
  FlexTr,
} from '../TableElements/ClassTableStyle'

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
        <FormButton
          type="button"
          onClick={() => changeWeek(Direction.PREVIOUS)}
          disabled={weekToDisplay < currentWeekOfTheYear - 1}
        >
          Previous Week
        </FormButton>
        <h2>
          Week {weekToDisplay} in {currentYear}
        </h2>
        <FormButton
          type="button"
          onClick={() => changeWeek(Direction.NEXT)}
          disabled={weekToDisplay > currentWeekOfTheYear + 1}
        >
          Next Week
        </FormButton>
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
  background-color: ${({ theme }) => theme.bg.quarternary};
  ${FlexTable}
`

const TableHeader = styled.thead`
  height: 40px;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.text.primary};
  text-transform: capitalize;
  vertical-align: center;
  ${FlexHead}
`

const TableH = styled.th`
  ${FlexTh}
`
const TableRow = styled.tr`
  height: 80%;
  display: flex;
  ${FlexTr}
`
const TableField = styled.td`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.quarternary};
  vertical-align: top;
  ${Flextd}
`
