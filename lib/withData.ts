import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { createUploadLink } from 'apollo-upload-client'
import withApollo from 'next-with-apollo'
// we've set up our endpoints here, this is how apollo knows where to look
import { endpoint, prodEndpoint } from '../config'
// import paginationField from './paginationField';

interface clientProps {
  headers?: {}
  initialState?: {}
}

// this is boilerplaty code
// we need to create a client that accepts headers and initial state, then inject links!
function createClient({ headers, initialState }: clientProps) {
  return new ApolloClient({
    link: ApolloLink.from([
      // this link handles errors, takes in 2 types of errors, graphQL errors and network errors
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          )
        // if your db is down, or you have cors errors
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`,
          )
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package https://www.apollographql.com/docs/react/api/link/apollo-link-http/
      // this is actually a separate package layered on top of apollo's http link that allows for file uploads 'apollo-upload-client';
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          // alway send the cookies!
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        // if you try to render logged in state w/server side rendering you'll get a weird flicker if you don't send cookies and headers,
        // if you send cookies with your jwts and headers, then you can render loggedin state immediately
        headers,
      }),
    ]),
    cache: new InMemoryCache({
      // where we store the cache, we store it in memory, so in the browser, that means it's gone on refresh
      typePolicies: {
        Query: {
          fields: {
            // when a field comes in, let me manage it myself
          },
        },
      },
      // restores initial state because we are doing ssr, we need to provide all server side data when our app is hydrated on the client by react (send data collected from server to client)
      // if there's initial state, restore it!
    }).restore(initialState || {}),
  })
}
// getDataFromTree comes from a package, @apollo/client/react/ssr, this allows us to crawl all pages from components to look for any queries, fetch the data,
// then send the data from the server to the client so that we got it all!
export default withApollo(createClient, { getDataFromTree })
