import RequestReset from '../components/UserAuth/RequestReset'
import ResetPassword from '../components/UserAuth/ResetPassword'

export default function reset({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>You need to supply a token</p>
        <RequestReset />
      </div>
    )
  }
  return (
    <>
      <h2>reset your password </h2>
      <ResetPassword token={query.token} />
    </>
  )
}
