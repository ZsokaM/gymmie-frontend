import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  CURRENT_USER_QUERY,
} from '../../lib/APIs/Auth'
import useForm from '../FormElements/useForm'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
} from '../FormElements/formElementsStyle'
import { FormButton } from '../styles/ButtonStyle'
import DisplayError from '../Layout/DisplayError'

export default function SignUp() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState({
    email: '',
    password: '',
  })

  const { inputs, handleChange, resetForm, clearForm } = useForm({
    email: '',
    name: '',
    password: '',
  })
  const [signup, { error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  })

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: isLoggedIn.email,
      password: isLoggedIn.password,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  })
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const result = await signup()
      if (result.data.createUser.__typename === 'User') {
        setIsLoggedIn({
          email: inputs.email,
          password: inputs.password,
        })
        login()
        clearForm()
        resetForm()
        router.push('/schedule')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <FormStyle method="POST" onSubmit={handleSubmit}>
        <FormHeader>Create an account</FormHeader>
        <DisplayError error={error} />
        <FieldSetStyle disabled={loading}>
          <LabelStyle htmlFor="name">
            <span>Name</span>
            <InputStyle
              type="text"
              name="name"
              placeholder="Name"
              value={inputs.name}
              autoComplete="name"
              onChange={handleChange}
              required
            />
          </LabelStyle>
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
          <FormButton type="submit">Get sweaty</FormButton>
        </FieldSetStyle>
      </FormStyle>
    </>
  )
}
