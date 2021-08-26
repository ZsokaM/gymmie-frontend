import { useMutation } from '@apollo/client'
import { SmallFormButton } from '../styles/ButtonStyle'
import { DELETE_BOOKING_MUTATION } from '../../lib/APIs/SportClassMutations'

interface DeleteBookingProps {
  id: string
}

function update(cache: any, payload: any) {
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
