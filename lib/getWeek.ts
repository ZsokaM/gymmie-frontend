export default function getWeek() {
  const currentDate = new Date()
  const oneJanuary = new Date(currentDate.getFullYear(), 0, 1)
  const numberOfDays = Math.floor(
    (currentDate - oneJanuary) / (24 * 60 * 60 * 1000),
  )
  return Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7)
}
