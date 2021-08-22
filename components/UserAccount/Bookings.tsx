import { useUser } from '../UserAuth/User'
import { weekDayNames, decimalToTime } from '../../lib/dateHelpers'
import DeleteBooking from './DeleteBooking'
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableField,
  TableTitle,
} from '../TableElements/ClassTableStyle'
import { SportClassInterface } from '../../lib/gymmieInterfaces'

interface BookingInterface {
  id: string
  sportClass: SportClassInterface
}

export default function Bookings() {
  const activeUser = useUser()

  if (!activeUser) return null

  return (
    <>
      <TableTitle>My bookings</TableTitle>
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
          {activeUser.bookings.map((bookedClass: BookingInterface) => {
            const {
              id,
              year,
              week,
              day,
              startTime,
              name,
              teacher,
            } = bookedClass.sportClass
            return (
              <TableRow key={id}>
                <TableField>{year}</TableField>
                <TableField>{week}</TableField>
                <TableField>{weekDayNames[day]}</TableField>
                <TableField>{name}</TableField>
                <TableField>{decimalToTime(startTime)}</TableField>
                <TableField>{teacher}</TableField>
                <TableField>
                  <DeleteBooking id={bookedClass.id} />
                </TableField>
              </TableRow>
            )
          })}
        </tbody>
      </TableContainer>
    </>
  )
}
