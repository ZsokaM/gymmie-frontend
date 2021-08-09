import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SportClassCard from './SportClassCard'
import { getWeek } from '../../lib/dateHelpers'

export const ALL_CLASSES_QUERY = gql`
  query ALL_CLASSES_QUERY {
    allSportClasses {
      id
      name
      freeSpots
      available
      week
      day
      startTime
      teacher
      duration
    }
  }
`

export default function Schedule() {
  let { data, error, loading } = useQuery(ALL_CLASSES_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const [week, setWeek] = useState(0)
  //todo: adjust dependency to update when pagination buttons are hit
  useEffect(() => {
    setWeek(getWeek())
  }, [])

  const FilterClassToDay = (dayNumber) => {
    return data.allSportClasses
      .filter(
        (sportClass) =>
          sportClass.week === week && sportClass.day === dayNumber.toString(),
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
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableField>{FilterClassToDay(1)}</TableField>
            <TableField>{FilterClassToDay(2)}</TableField>
            <TableField>{FilterClassToDay(3)}</TableField>
            <TableField>{FilterClassToDay(4)}</TableField>
            <TableField>{FilterClassToDay(5)}</TableField>
            <TableField>{FilterClassToDay(6)}</TableField>
            <TableField>{FilterClassToDay(7)}</TableField>
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
