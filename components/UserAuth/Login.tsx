import { useMutation } from '@apollo/client'
import Router from 'next/router'
import { LOGIN_MUTATION, CURRENT_USER_QUERY } from '../../lib/APIs/Auth'
import useForm from '../FormElements/useForm'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import { useModal } from '../Modals/ModalContext'
import DisplayError from '../Layout/DisplayError'

export default function Login() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: '',
    password: '',
  })
  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  const error = data?.authenticateUserWithPassword.message

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await login()
      if (
        data?.authenticateUserWithPassword.__typename ===
        'UserAuthenticationWithPasswordSuccess'
      ) {
        Router.push({
          pathname: '/schedule',
        })
        clearForm()
        resetForm()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <FormStyle method="POST" onSubmit={handleSubmit}>
        <FormHeader>Login</FormHeader>
        <DisplayError error={error} />
        <FieldSetStyle disabled={loading}>
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
          <LabelStyle htmlFor="password">
            <span>Password</span>
            <InputStyle
              type="password"
              name="password"
              placeholder="********"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
          </LabelStyle>
          <FormButton type="submit">Log me in</FormButton>
        </FieldSetStyle>
      </FormStyle>
    </>
  )
}
