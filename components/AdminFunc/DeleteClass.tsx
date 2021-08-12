import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const DELETE_SPORTCLASS_MUTATION = gql`
  mutation DELETE_SPORTCLASS_MUTATION($id: ID!) {
    deleteSportClass(id: $id) {
      id
      name
    }
  }
`

//payload = what gets returned from the update of the mutation, this case id and name
const update = (cache, payload) => {
  //finding the item in the cache and than evict it
  cache.evict(cache.identify(payload.data.deleteSportClass))
}

export default function DeleteClass({ id, children }) {
  const [deleteProduct, { data, loading, error }] = useMutation(
    DELETE_SPORTCLASS_MUTATION,
    {
      variables: { id },
      update: update,
    },
  )

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        //@TODO: replace with nice modal
        if (confirm('Are you sure you want to delete this item?')) {
          deleteProduct().catch((err) => alert(err.message))
        }
      }}
    >
      {children}
    </button>
  )
}
