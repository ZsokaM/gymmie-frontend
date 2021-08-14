export const weekDayNames = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const firstClass = 8
const lastClass = 20
export function classHours() {
  let hoursArray = []
  for (let i = firstClass; i <= lastClass; i++) {
    hoursArray.push(i + 0.5)
  }
  return hoursArray
}

export function getWeek() {
  const currentDate = new Date()
  const oneJanuary = new Date(currentDate.getFullYear(), 0, 1)
  const numberOfDays = Math.floor(
    (currentDate - oneJanuary) / (24 * 60 * 60 * 1000),
  )
  return Math.floor((currentDate.getDay() - 2 + numberOfDays) / 7)
}

export const currentYear = new Date().getFullYear()

export function decimalToTime(decimal: number): string {
  const min = Math.floor(Math.abs(decimal))
  const sec = Math.floor((Math.abs(decimal) * 60) % 60)
  return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec
}
