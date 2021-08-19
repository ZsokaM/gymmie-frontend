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
  FormButton,
} from '../FormElements/formElementsStyle'
import ErrorComp from '../Layout/ErrorComp'

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
  const user = useUser()
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  })
  const [login, { data, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    //refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  const error = data?.authenticateUserWithPassword.message

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await login()
    if (
      data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordSuccess'
    ) {
      Router.push({
        pathname: '/schedule',
      })
    }
  }

  return (
    <>
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
              autocomplete="email"
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
              autocomplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </LabelStyle>
          <FormButton type="submit">Log me in</FormButton>
        </FieldSetStyle>
      </FormStyle>
    </>
  )
}
