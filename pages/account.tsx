import Head from 'next/head'
import Bookings from '../components/UserAccount/Bookings'
import UserDetails from '../components/UserAccount/UserDetails'

export default function account() {
  return (
    <>
      <Head>
        <title>gymmie | My account </title>
      </Head>
      <UserDetails />
      <Bookings />
    </>
  )
}
