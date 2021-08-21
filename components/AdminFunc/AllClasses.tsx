import { useQuery } from '@apollo/client'
import Link from 'next/link'
import DeleteClass from '../AdminFunc/DeleteClass'
import { ALL_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import { weekDayNames, decimalToTime, getWeek } from '../../lib/dateHelpers'
import DisplayError from '../Layout/DisplayError'
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

interface AllClassesInterface {
  allSportClasses: SportClassInterface[]
}

export default function AllClasses({}) {
  const { data, error, loading } = useQuery<AllClassesInterface>(
    ALL_CLASSES_QUERY,
  )
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
            <th>Attendees</th>
            <th>Actions</th>
          </TableRow>
        </TableHeader>
        <tbody>
          {data?.allSportClasses.map((sportClass) => (
            <TableRow key={sportClass.id}>
              <TableField>{sportClass.year}</TableField>
              <TableField>{sportClass.week}</TableField>
              <TableField>{weekDayNames[sportClass.day]}</TableField>
              <TableField>{decimalToTime(sportClass.startTime)}</TableField>
              <TableField>{sportClass.name}</TableField>
              <TableField>{sportClass.teacher}</TableField>
              <TableField>
                {sportClass.users ? sportClass.users.length : 0}
              </TableField>
              <TableField>
                <ButtonWrapper>
                  <Link
                    href={{
                      pathname: 'update',
                      query: {
                        id: sportClass.id,
                      },
                    }}
                  >
                    <SmallButton>Edit</SmallButton>
                  </Link>
                  <DeleteClass id={sportClass.id} />
                </ButtonWrapper>
              </TableField>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </>
  )
}
