import { useMutation } from '@apollo/client'
import { useState } from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import Router from 'next/router'
import { LOGIN_MUTATION } from './Login'
import { CURRENT_USER_QUERY } from './User'
import useForm from '../FormElements/useForm'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`

export default function SignUp() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    email: '',
    password: '',
  })

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  })
  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  })

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: isLoggedIn.email,
      password: isLoggedIn.password,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })
  const handleSubmit = async (event) => {
    event.preventDefault()
    await signup().catch(console.error)
    resetForm()
    setIsLoggedIn({
      email: inputs.email,
      password: inputs.password,
    })
    login()
    Router.push({
      pathname: '/schedule',
    })
  }

  if (error) return <p>Error: {error}</p>

  return (
    <>
      <h2>Create an account</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name}
              autoComplete="name"
              onChange={handleChange}
            />
          </label>
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
      <p>Do you already have an account?</p>
      <Link href="/login">Sign in!</Link>
    </>
  )
}
