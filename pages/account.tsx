import Head from 'next/head'
import Bookings from '../components/UserAccount/Bookings'
import { useUser } from '../components/UserAuth/User'

export default function account() {
  return (
    <div>
      <Head>
        <title>gymmie | My account </title>
      </Head>
      <Bookings />
    </div>
  )
}
