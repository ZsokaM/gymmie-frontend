import { gql, useQuery } from '@apollo/client'

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      # when the authenticated item returns a user, then we will return its data on the user
      ... on User {
        id
        name
        email
        bookings {
          id
          sportClass {
            id
            name
            year
            week
            day
            startTime
            teacher
            duration
          }
        }
      }
    }
  }
`

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY)
  return data?.authenticatedItem
}
