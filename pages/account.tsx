import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Bookings from '../components/UserAccount/Bookings'
import UserDetails from '../components/UserAccount/UserDetails'
import { useUser } from '../components/UserAuth/User'

export default function account() {
  const router = useRouter()
  const user = useUser()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

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
