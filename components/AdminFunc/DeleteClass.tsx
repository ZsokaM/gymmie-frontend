import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { SmallFormButton } from '../styles/ButtonStyle'
import { SINGLE_SPORTCLASS_QUERY } from '../../lib/APIs/SportClassQueries'
import {
  DELETE_SPORTCLASS_MUTATION,
  DELETE_BOOKING_MUTATION,
} from '../../lib/APIs/SportClassMutations'
import { useModal } from '../Modals/ModalContext'
import { ModalProps } from '../../lib/gymmieInterfaces'

const update = (cache: any, payload: any) => {
  cache.evict(cache.identify(payload.data.deleteSportClass))
}

interface DeleteClassProps {
  id: string
}

function bookingUpdate(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteSingleBooking))
}

export default function DeleteClass({ id }: DeleteClassProps) {
  const modal: ModalProps = useModal()
  const [arrayOfBookings, setArrayOfBookings] = useState([])

  const { data, loading, error } = useQuery(SINGLE_SPORTCLASS_QUERY, {
    variables: { id },
    onCompleted: (data) => setArrayOfBookings(data.SportClass.bookings),
  })

  const [deleteBooking] = useMutation(DELETE_BOOKING_MUTATION, {
    update: bookingUpdate,
  })

  const [deleteSportClass] = useMutation(DELETE_SPORTCLASS_MUTATION, {
    variables: { id },
    update,
  })

  //const combinedDelete = () => {
  // console.log('hello why caant you waaaaait')
  // arrayOfBookings.forEach((booking) => {
  //   deleteBooking({ variables: { id: booking.id } })
  // })

  // deleteSportClass().catch((err) => alert(err.message))
  // }

  function handleDeleteModal() {
    // modal.setModalText('Are you sure you want to delete this item?')
    // modal.showModal()

    if (confirm('Are you sure you want to delete this item?')) {
      arrayOfBookings.forEach((bk: any) => {
        deleteBooking({ variables: { id: bk.id } })
      })
      deleteSportClass().catch((err) => alert(err.message))
    }
  }

  return (
    <SmallFormButton
      type="button"
      disabled={loading}
      onClick={handleDeleteModal}
    >
      Delete
    </SmallFormButton>
  )
}
