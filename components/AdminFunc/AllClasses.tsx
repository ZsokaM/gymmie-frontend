import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import DeleteClass from '../AdminFunc/DeleteClass'
import { WEEKLY_CLASSES_QUERY } from '../../lib/APIs/SportClassQueries'
import {
  weekDayNames,
  decimalToTime,
  getWeek,
  currentYear,
} from '../../lib/dateHelpers'
import DisplayError from '../Layout/DisplayError'
import { AllClassesInterface, Direction } from '../../lib/gymmieInterfaces'
import { SmallFormButton } from '../styles/ButtonStyle'
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableField,
  ButtonWrapper,
} from '../TableElements/ClassTableStyle'
import ChangeWeek from '../TableElements/ChangeWeek'

export default function AllClasses({}) {
  const [currentWeekOfTheYear, setCurrentWeekOfTheYear] = useState(getWeek())
  const [weekToDisplay, setWeekToDisplay] = useState(currentWeekOfTheYear)

  const { data, error, loading } = useQuery<AllClassesInterface>(
    WEEKLY_CLASSES_QUERY,
    { variables: { week: weekToDisplay, year: currentYear } },
  )

  if (loading) return <p>Loading...</p>

  const changeWeek = (direction: Direction) => {
    direction === Direction.PREVIOUS
      ? setWeekToDisplay((prevState) => prevState - 1)
      : setWeekToDisplay((prevState) => prevState + 1)
  }

  return (
    <>
      <ChangeWeek
        handleClickPrev={() => changeWeek(Direction.PREVIOUS)}
        handleClickNext={() => changeWeek(Direction.NEXT)}
      >
        <h2>Class List</h2>
      </ChangeWeek>
      <DisplayError error={error} />
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
                {sportClass.bookings ? sportClass.bookings.length : 0}
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
                    <SmallFormButton>Edit</SmallFormButton>
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
