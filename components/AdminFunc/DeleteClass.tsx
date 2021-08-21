import { useMutation } from '@apollo/client'
import { SmallFormButton } from '../styles/ButtonStyle'
import { DELETE_SPORTCLASS_MUTATION } from '../../lib/APIs/SportClassMutations'

//payload = what gets returned from the update of the mutation, this case id and name
const update = (cache, payload) => {
  //finding the item in the cache and than evict it
  cache.evict(cache.identify(payload.data.deleteSportClass))
}

interface DeleteClassProps {
  id: string
}
export default function DeleteClass({ id }: DeleteClassProps) {
  const [deleteProduct, { loading }] = useMutation(DELETE_SPORTCLASS_MUTATION, {
    variables: { id },
    update: update,
  })

  return (
    <SmallFormButton
      type="button"
      disabled={loading}
      onClick={() => {
        //@TODO: replace with nice modal
        if (confirm('Are you sure you want to delete this item?')) {
          deleteProduct().catch((err) => alert(err.message))
        }
      }}
    >
      Delete
    </SmallFormButton>
  )
}
