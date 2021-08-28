import gql from 'graphql-tag'

export const CREATE_SPORTCLASS_MUTATION = gql`
  mutation CREATE_SPORTCLASS_MUTATION(
    $name: String!
    $freeSpots: Int!
    $available: Int!
    $year: Int!
    $week: Int!
    $day: Int!
    $startTime: String!
    $teacher: String!
    $duration: Int!
  ) {
    createSportClass(
      data: {
        name: $name
        freeSpots: $freeSpots
        available: $available
        year: $year
        week: $week
        day: $day
        startTime: $startTime
        teacher: $teacher
        duration: $duration
      }
    ) {
      id
    }
  }
`

export const UPDATE_SPORTCLASS_MUTATION = gql`
  mutation UPDATE_SPORTCLASS_MUTATION(
    $id: ID!
    $name: String!
    $freeSpots: Int!
    $available: Int!
    $year: Int!
    $week: Int!
    $day: Int!
    $startTime: String!
    $teacher: String!
    $duration: Int!
  ) {
    updateSportClass(
      id: $id
      data: {
        name: $name
        freeSpots: $freeSpots
        available: $available
        year: $year
        week: $week
        day: $day
        startTime: $startTime
        teacher: $teacher
        duration: $duration
      }
    ) {
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
    }
  }
`

export const DELETE_SPORTCLASS_MUTATION = gql`
  mutation DELETE_SPORTCLASS_MUTATION($id: ID!) {
    deleteSportClass(id: $id) {
      id
      name
    }
  }
`

export const ADD_TO_BOOKINGS_MUTATION = gql`
  mutation ADD_TO_BOOKINGS_MUTATION($id: ID!) {
    addToBookings(sportClassId: $id) {
      id
    }
  }
`

export const DELETE_BOOKING_MUTATION = gql`
  mutation DELETE_BOOKING_MUTATION($id: ID!) {
    deleteSingleBooking(id: $id) {
      id
    }
  }
`
