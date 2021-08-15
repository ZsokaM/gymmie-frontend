import Head from 'next/head'
import Bookings from '../components/UserAccount/Bookings'

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
