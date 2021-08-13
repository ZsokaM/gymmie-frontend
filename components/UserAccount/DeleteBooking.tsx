import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const DELETE_BOOKING_MUTATION = gql`
  mutation DELETE_BOOKING_MUTATION($id: ID!) {
    deleteSingleBooking(id: $id) {
      id
    }
  }
`

export default function DeleteBooking({ id }) {
  const [deleteBooking, { loading }] = useMutation(DELETE_BOOKING_MUTATION, {
    variables: { id },
  })

  return (
    <button
      type="button"
      onClick={deleteBooking}
      disabled={loading}
      title="cancel this booking"
    >
      cancel
    </button>
  )
}
