import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

//@NOTE: this is the one I wanted to replace, but the more research and trials I do
//the less likely i will do it. This one just makes sense and covers all possible error
//types coming back from queries and mutations
//did my own error messaging in the login

interface DisplayErrorProps {
  error: {
    message: string
    networkError: {
      result: {
        errors: {
          message: string
        }[]
      }
    }
  }
}
const DisplayError = ({ error }: DisplayErrorProps) => {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, idx: number) => (
      <ErrorStyles key={idx}>
        <p data-test="graphql-error">
          <strong>Oh no!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ))
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Oh no!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  )
}

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${({ theme }) => theme.bg.secondary};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`

export default DisplayError
