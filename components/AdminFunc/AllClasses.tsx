import { useQuery } from '@apollo/client'
import Link from 'next/link'
import styled from 'styled-components'
import DeleteClass from '../AdminFunc/DeleteClass'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'
import { weekDayNames, decimalToTime } from '../../lib/dateHelpers'

export default function AllClasses() {
  let { data, error, loading } = useQuery(ALL_CLASSES_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h2>Class list</h2>
      <TableContainer>
        <TableHeader>
          <tr>
            <th>Year</th>
            <th>Week</th>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </TableHeader>
        <tbody>
          {data.allSportClasses.map((sportClass) => (
            <TableRow key={sportClass.id}>
              <TableField>{sportClass.year}</TableField>
              <TableField>{sportClass.week}</TableField>
              <TableField>{weekDayNames[sportClass.day]}</TableField>
              <TableField>{decimalToTime(sportClass.startTime)}</TableField>
              <TableField>{sportClass.name}</TableField>
              <TableField>{sportClass.teacher}</TableField>
              <TableField>
                <Link
                  href={{
                    pathname: 'admin',
                    query: {
                      id: sportClass.id,
                    },
                  }}
                >
                  Edit
                </Link>
                <DeleteClass id={sportClass.id}>Delete</DeleteClass>
              </TableField>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  )
}

const TableContainer = styled.table`
  margin: 5rem auto;
`

const TableHeader = styled.thead`
  height: 30px;
  background-color: lightblue;
`
const TableRow = styled.tr`
  background-color: blue;
`
const TableField = styled.td`
  height: 20px;
  width: 100px;
  background-color: lavender;
  vertical-align: top;
`
