import api from '@/lib/axios'
import useUserStore from '@/store/user'
import { useQuery } from '@tanstack/react-query'

export const listPets = async (userId?: string, isAvailable?: boolean) => {
  const params = new URLSearchParams()

  if (isAvailable !== undefined) params.append('isAvailable', String(isAvailable))

  if (userId) params.append('userId', userId)

  const url = `/pets?${params.toString()}`
  const { data } = await api.get(url)
  return data
}

const useFetchPetsQuery = () => {
  const { user } = useUserStore()
  const pets = useQuery({
    queryKey: ['list-pets'],
    queryFn: () => listPets(undefined, true),
  })

  const myPets = useQuery({
    queryKey: ['my-pets', user.id],
    queryFn: () => listPets(user.id, undefined),
  })

  return {
    pets: pets.data,
    myPets: myPets.data,
    myPetsIsLoading: myPets.isLoading,
    isLoading: pets.isLoading,
  }
}

export default useFetchPetsQuery
