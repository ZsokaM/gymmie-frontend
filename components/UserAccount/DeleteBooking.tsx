import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { SmallButton } from '../TableElements/ClassTableStyle'

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

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteSingleBooking))
}

export default function DeleteBooking({ id }: DeleteBookingProps) {
  const [deleteBooking, { loading }] = useMutation(DELETE_BOOKING_MUTATION, {
    variables: { id },
    update,
  })

  return (
    <SmallButton
      type="button"
      onClick={() => deleteBooking()}
      disabled={loading}
      title="cancel this booking"
    >
      cancel
    </SmallButton>
  )
}
