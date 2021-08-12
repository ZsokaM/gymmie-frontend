import { useMutation } from '@apollo/client'
import { useState } from 'react'
import gql from 'graphql-tag'

import useForm from '../FormElements/useForm'

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    await passwordReset()
    resetForm()
  }

  //@TODO: add error handling
  return (
    <>
      <h2>Reset your password</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          {data?.redeemUserPasswordResetToken === null && (
            <p>Success! You can Now sign in</p>
          )}
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
            New password
            <input
              type="password"
              name="password"
              placeholder="********"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Reset Password</button>
        </fieldset>
      </form>
    </>
  )
}
