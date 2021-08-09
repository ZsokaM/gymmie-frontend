export const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export function classHours() {
  let hoursArray = []
  for (let i = 8; i <= 20; i++) {
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
  return Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7)
}
