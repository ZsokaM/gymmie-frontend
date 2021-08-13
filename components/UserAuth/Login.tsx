import { useMutation } from '@apollo/client'

import gql from 'graphql-tag'
import Link from 'next/link'
import Router from 'next/router'
import useForm from '../FormElements/useForm'
import { CURRENT_USER_QUERY } from './User'

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
      <h2>Login</h2>

      <form method="POST" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="********"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <p>You don't have an account yet? </p>
      <Link href="/signup">Sign up!</Link>
    </>
  )
}
