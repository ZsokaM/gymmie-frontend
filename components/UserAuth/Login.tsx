import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import useForm from '../FormElements/useForm'

import { CURRENT_USER_QUERY, useUser } from './User'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import ErrorMessage from '../Layout/ErrorMessage'

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`
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
    <FormStyle method="POST" onSubmit={handleSubmit}>
      <FormHeader>Login</FormHeader>
      {error !== undefined && <ErrorComp msg={error} />}
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
          />
        </LabelStyle>
        <FormButton type="submit">Log me in</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
