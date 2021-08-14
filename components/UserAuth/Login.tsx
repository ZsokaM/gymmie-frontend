import { useMutation } from '@apollo/client'

import gql from 'graphql-tag'
import Link from 'next/link'
import Router from 'next/router'
import useForm from '../FormElements/useForm'
import { CURRENT_USER_QUERY } from './User'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
  FormButton,
} from '../FormElements/formElementsStyle'

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
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  })
  const [login, { data, error, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    //refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login()
    resetForm()
    Router.push({
      pathname: '/schedule',
    })
  }

  //@TODO: find out why it results in error if the login actually works

  return (
    <>
      <FormStyle method="POST" onSubmit={handleSubmit}>
        <FormHeader>Login</FormHeader>
        <FieldSetStyle>
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
      <p>You don't have an account yet? </p>
      <Link href="/signup">Sign up!</Link>
    </>
  )
}
