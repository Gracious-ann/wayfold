import { useQuery } from '@tanstack/react-query'
import { getDestinations } from '../lib/api'

export default function useDestinations() {
  const { data, isPending, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
  })

  return { data, isPending, error }
}
