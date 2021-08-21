import { useQuery } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../../lib/APIs/Auth'

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY)
  return data?.authenticatedItem
}
