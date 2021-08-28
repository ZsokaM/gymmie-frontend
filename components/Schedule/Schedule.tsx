import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { WEEKLY_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import SportClassCard from './SportClassCard'
import { getWeek, weekDayNames, currentYear } from '../../lib/dateHelpers'
import {
  SportClassInterface,
  Direction,
  AllClassesInterface,
} from '../../lib/gymmieInterfaces'
import { centeredItems } from '../styles/HelperStyles'
import {
  FlexHead,
  FlexTable,
  Flextd,
  FlexTh,
  FlexTr,
} from '../TableElements/ClassTableStyle'
import ChangeWeek from '../TableElements/ChangeWeek'

export default function Schedule() {
  const [currentWeekOfTheYear, setCurrentWeekOfTheYear] = useState(getWeek())
  const [weekToDisplay, setWeekToDisplay] = useState(currentWeekOfTheYear)

  useEffect(() => {
    setCurrentWeekOfTheYear(getWeek())
  }, [])

  const { data, error, loading } = useQuery<AllClassesInterface>(
    WEEKLY_CLASSES_QUERY,
    { variables: { week: weekToDisplay, year: currentYear } },
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const changeWeek = (direction: Direction) => {
    direction === Direction.PREVIOUS
      ? setWeekToDisplay((prevState) => prevState - 1)
      : setWeekToDisplay((prevState) => prevState + 1)
  }
  const FilterClassToDay = (dayNumber: number) => {
    return data?.allSportClasses
      .filter((sportClass: SportClassInterface) => sportClass.day === dayNumber)
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
      <ChangeWeek
        handleClickPrev={() => changeWeek(Direction.PREVIOUS)}
        handleClickNext={() => changeWeek(Direction.NEXT)}
        disabledConditionPrev={weekToDisplay < currentWeekOfTheYear - 1}
        disabledConditionNext={weekToDisplay > currentWeekOfTheYear + 1}
        text={
          <p>
            Week {weekToDisplay} in {currentYear}
          </p>
        }
      />
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
