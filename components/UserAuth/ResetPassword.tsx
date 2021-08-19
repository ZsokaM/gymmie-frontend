import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
  FormButton,
} from '../FormElements/formElementsStyle'
import useForm from '../FormElements/useForm'
import DisplayError from '../Layout/DisplayError'

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      message
      code
    }
  }
`

export default function ResetPassword({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  })

  const [passwordReset, { data, loading, error }] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      variables: inputs,
    },
  )

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined

  const handleSubmit = async (event) => {
    event.preventDefault()
    await passwordReset()
    resetForm()
  }

  return (
    <FormStyle method="POST" onSubmit={handleSubmit}>
      <FormHeader>Reset your password</FormHeader>
      <DisplayError error={error || successfulError} />
      <FieldSetStyle disabled={loading}>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can Now sign in</p>
        )}
        <LabelStyle htmlFor="email">
          <span>Email</span>
          <InputStyle
            type="email"
            name="email"
            placeholder="Email address"
            autocomplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </LabelStyle>
        <LabelStyle htmlFor="password">
          <span>New password</span>
          <InputStyle
            type="password"
            name="password"
            placeholder="********"
            autocomplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </LabelStyle>
        <FormButton type="submit">Reset Password</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
