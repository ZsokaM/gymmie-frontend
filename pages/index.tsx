import Head from 'next/head'
import Hero from '../components/HomePage/Hero'
import InfoSection from '../components/HomePage/InfoSection'
import Price from '../components/HomePage/Price'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>gymmie | Home </title>
      </Head>
      <Hero />
      <InfoSection imgStart={false} />
      <InfoSection imgStart={true} />
      <InfoSection imgStart={false} />
      <Price />
    </>
  )
}
