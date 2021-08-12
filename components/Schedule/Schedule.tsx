import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SportClassCard from './SportClassCard'
import { getWeek, weekDayNames, currentYear } from '../../lib/dateHelpers'

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
  const [weekOfTheYear, setWeekOfTheYear] = useState(0)

  //todo: adjust dependency to update when pagination buttons are hit
  useEffect(() => {
    setWeekOfTheYear(getWeek())
  }, [])

  let { data, error, loading } = useQuery(ALL_CLASSES_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const FilterClassToDay = (dayNumber) => {
    return data.allSportClasses
      .filter(
        (sportClass) =>
          sportClass.year === currentYear &&
          sportClass.week === weekOfTheYear &&
          sportClass.day === dayNumber,
      )
      .map((sportClass) => (
        <SportClassCard key={sportClass.id} classData={sportClass} />
      ))
  }

  return (
    <>
      <div>{getWeek()}</div>
      {/* todo: add functionality to buttons */}
      <button>Previous Week</button>
      <button>Next Week</button>
      <TableContainer>
        <TableHeader>
          <tr>
            {weekDayNames.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
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

const TableContainer = styled.table`
  margin: 5rem auto;
`

const TableHeader = styled.thead`
  height: 40px;
  background-color: lightblue;
`
const TableRow = styled.tr`
  height: 1350px;
`
const TableField = styled.td`
  height: 100px;
  width: 200px;
  background-color: lavender;
  vertical-align: top;
`