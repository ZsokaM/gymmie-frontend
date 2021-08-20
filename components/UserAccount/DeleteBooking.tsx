import gql from 'graphql-tag'
import { ApolloCache, useMutation } from '@apollo/client'
import { SmallFormButton } from '../styles/ButtonStyle'

const DELETE_BOOKING_MUTATION = gql`
  mutation DELETE_BOOKING_MUTATION($id: ID!) {
    deleteSingleBooking(id: $id) {
      id
    }
  }
`

interface DeleteBookingProps {
  id: string
}

//@TODO: find type for cahce and payload, empty object doesnt do it

function update(cache: unknown, payload: unknown) {
  cache.evict(cache.identify(payload.data.deleteSingleBooking))
}

export default function DeleteBooking({ id }: DeleteBookingProps) {
  const [deleteBooking, { loading }] = useMutation(DELETE_BOOKING_MUTATION, {
    variables: { id },
    update,
  })

  return (
    <SmallFormButton
      type="button"
      onClick={() => deleteBooking()}
      disabled={loading}
      title="cancel this booking"
    >
      cancel
    </SmallFormButton>
  )
}
