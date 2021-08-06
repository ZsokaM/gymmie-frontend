import Hero from '../components/HomePage/Hero'
import InfoSection from '../components/HomePage/InfoSection'
import Price from '../components/HomePage/Price'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <InfoSection id="class-types" imgStart={false} />
      <InfoSection imgStart={true} />
      <InfoSection imgStart={false} />
      <Price />
    </>
  )
}
