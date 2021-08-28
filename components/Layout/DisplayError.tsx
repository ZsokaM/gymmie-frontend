import { ApolloError } from '@apollo/client'
import styled from 'styled-components'

interface DisplayErrorProps {
  error: ApolloError | any
}

export default function DisplayError({ error }: DisplayErrorProps) {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map(
      (error: ApolloError, idx: number) => (
        <ErrorStyles key={idx}>
          <p data-test="graphql-error">
            <strong>Oh no!</strong>
            {error.message.replace('GraphQL error: ', '')}
          </p>
        </ErrorStyles>
      ),
    )
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
  background-color: '#EFB7B7';
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
