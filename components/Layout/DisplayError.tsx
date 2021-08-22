import styled from 'styled-components'

interface DisplayErrorProps {
  error: {} | string
}

// export function createErrorMessage(error) {
//   const messageToDisplay = []
//   if (
//     error.networkError &&
//     error.networkError.result &&
//     error.networkError.result.errors.length
//   ) {
//     error.networkError.result.errors.map((err) => {
//       messageToDisplay.push(err.message)
//     })
//   }
//   messageToDisplay.push(error.message)
//   console.log(messageToDisplay)
//   return messageToDisplay.toString()
// }

export default function DisplayError({ error }) {
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
  background-color: white;
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
