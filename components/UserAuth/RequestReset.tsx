import { useMutation, useLazyQuery } from '@apollo/client'
import { REQUEST_RESET_MUTATION } from '../../lib/APIs/Auth'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import useForm from '../FormElements/useForm'

export default function RequestReset() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: '',
  })

  const [requestReset, { data, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    },
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await requestReset()
      clearForm()
      resetForm()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <FormStyle method="POST" onSubmit={handleSubmit}>
      <FormHeader>Request password reset</FormHeader>
      <FieldSetStyle disabled={loading}>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}
        <LabelStyle htmlFor="email">
          <span>Email</span>
          <InputStyle
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
        </LabelStyle>
        <FormButton type="submit">Help me</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
