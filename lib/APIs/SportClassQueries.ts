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
    }
  }
`

export const SINGLE_SPORTCLASS_QUERY = gql`
  query SINGLE_SPORTCLASS_QUERY($id: ID!) {
    SportClass(where: { id: $id }) {
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
