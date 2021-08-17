import { useQuery } from '@apollo/client'
import Link from 'next/link'
import DeleteClass from '../AdminFunc/DeleteClass'
import { ALL_CLASSES_QUERY } from '../Schedule/Schedule'
import { weekDayNames, decimalToTime } from '../../lib/dateHelpers'
import DisplayError from '../Layout/ErrorMessage'
import { SportClassInterface } from '../../lib/gymmieInterfaces'

import {
  TableContainer,
  TableHeader,
  TableRow,
  TableField,
  SmallButton,
  ButtonWrapper,
  TableTitle,
} from '../TableElements/ClassTableStyle'

export default function AllClasses() {
  let { data, error, loading } = useQuery(ALL_CLASSES_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />

  return (
    <>
      <TableTitle>Class list</TableTitle>
      <TableContainer>
        <TableHeader>
          <TableRow>
            <th>Year</th>
            <th>Week</th>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
            <th>Teacher</th>
            <th>Actions</th>
          </TableRow>
        </TableHeader>
        <tbody>
          {data.allSportClasses.map((sportClass: SportClassInterface) => (
            <TableRow key={sportClass.id}>
              <TableField>{sportClass.year}</TableField>
              <TableField>{sportClass.week}</TableField>
              <TableField>{weekDayNames[sportClass.day]}</TableField>
              <TableField>{decimalToTime(sportClass.startTime)}</TableField>
              <TableField>{sportClass.name}</TableField>
              <TableField>{sportClass.teacher}</TableField>
              <TableField>
                <ButtonWrapper>
                  <Link
                    href={{
                      pathname: 'admin',
                      query: {
                        id: sportClass.id,
                      },
                    }}
                  >
                    <SmallButton>Edit</SmallButton>
                  </Link>
                  <DeleteClass id={sportClass.id}>Delete</DeleteClass>
                </ButtonWrapper>
              </TableField>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  )
}
