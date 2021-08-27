import gql from 'graphql-tag'

export const ALL_CLASSES_QUERY = gql`
  query ALL_CLASSES_QUERY {
    allSportClasses {
      id
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
      bookings {
        id
      }
    }
  }
`
export const WEEKLY_CLASSES_QUERY = gql`
  query WEEKLY_CLASSES_QUERY($week: Int!, $year: Int!) {
    allSportClasses(where: { week: $week, year: $year }) {
      id
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
      bookings {
        id
      }
    }
  }
`

export const SINGLE_SPORTCLASS_QUERY = gql`
  query SINGLE_SPORTCLASS_QUERY($id: ID!) {
    SportClass(where: { id: $id }) {
      id
      name
      freeSpots
      available
      year
      week
      day
      startTime
      teacher
      duration
      bookings {
        id
      }
    }
  }
`

export const BOOKING_BY_SPORTCLASSID_QUERY = gql`
  query BOOKING_BY_SPORTCLASSID_QUERY($id: ID!) {
    allSingleBookings(where: { sportClass: { id: $id } }) {
      id
    }
  }
`
