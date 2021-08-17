import { useMutation, useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'
import {
  FieldSetStyle,
  FormHeader,
  FormStyle,
  InputStyle,
  LabelStyle,
  FormButton,
} from '../FormElements/formElementsStyle'
import useForm from '../FormElements/useForm'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
      code
    }
  }
`

//so apparently it's a security issue if someone can test if an email is the database or not,
//hence keystone is not checking for valid email.
//i dont have the heart to delete this yet :D maybe it will come handy

// const FIND_USER_BY_EMAIL_QUERY = gql`
//   query FIND_USER_BY_EMAIL_QUERY($email: String) {
//     allUsers(where: { email: $email }) {
//       id
//     }
//   }
// `

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  })

  const [requestReset, { data, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    },
  )

  // const [findEmail, { data: userData }] = useLazyQuery(
  //   FIND_USER_BY_EMAIL_QUERY,
  //   {
  //     variables: inputs,
  //   },
  // )

  // const error =
  //   userData?.allUsers.length === 0
  //     ? 'This email address is not in our database'
  //     : undefined

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await requestReset()
    resetForm()
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
          />
        </LabelStyle>
        <FormButton type="submit">Help me</FormButton>
      </FieldSetStyle>
    </FormStyle>
  )
}
