import { useMutation } from '@apollo/client'
import { useState } from 'react'
import gql from 'graphql-tag'

import useForm from '../FormElements/useForm'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  })

  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    },
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    await requestReset().catch(console.error)
    resetForm()
  }

  return (
    <>
      <h2>Request password reset</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset disabled={loading}>
          {data?.sendUserPasswordResetLink === null && (
            <p>Success! Check your email for a link!</p>
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
          <button type="submit">Request reset</button>
        </fieldset>
      </form>
    </>
  )
}
