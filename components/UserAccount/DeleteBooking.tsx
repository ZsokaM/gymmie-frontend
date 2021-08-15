import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

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

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteSingleBooking))
}

export default function DeleteBooking({ id }: DeleteBookingProps) {
  const [deleteBooking, { loading }] = useMutation(DELETE_BOOKING_MUTATION, {
    variables: { id },
    update,
  })

  return (
    <button
      type="button"
      onClick={() => deleteBooking()}
      disabled={loading}
      title="cancel this booking"
    >
      cancel
    </button>
  )
}
