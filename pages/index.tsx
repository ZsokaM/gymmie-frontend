import Hero from '../components/HomePage/Hero'
import InfoSection from '../components/HomePage/InfoSection'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <InfoSection id="class-types" imgStart={false} />
      <InfoSection id="prices" imgStart={true} />
      <InfoSection id="contact" imgStart={false} />
    </>
  )
}
