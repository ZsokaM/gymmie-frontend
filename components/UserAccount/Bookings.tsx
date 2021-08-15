import { useUser } from '../UserAuth/User'
import { weekDayNames, decimalToTime } from '../../lib/dateHelpers'
import DeleteBooking from './DeleteBooking'

export default function Bookings() {
  const activeUser = useUser()
  if (!activeUser) return null

  return (
    <>
      <h2>My bookings</h2>
      <div>
        <div>
          {activeUser.bookings.map((bookedClass) => {
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
              <div key={id}>
                <div>{year}</div>
                <div>{week}</div>
                <div>{weekDayNames[day]}</div>
                <div>{decimalToTime(startTime)}</div>
                <div>{name}</div>
                <div>{teacher}</div>
                <DeleteBooking id={bookedClass.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
