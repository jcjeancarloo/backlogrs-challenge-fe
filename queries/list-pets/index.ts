import api from '@/lib/axios'
import useUserStore from '@/store/user'
import { useQuery } from '@tanstack/react-query'

export const listPets = async (userId?: string) => {
  const url = userId ? `/pets?userId=${userId}` : '/pets'
  const { data } = await api.get(url)
  return data
}

const useFetchPetsQuery = () => {
  const { user } = useUserStore()
  const pets = useQuery({
    queryKey: ['list-pets'],
    queryFn: () => listPets(),
    staleTime: 2 * 60 * 1000, // 2 Mins,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const myPets = useQuery({
    queryKey: ['my-pets', user.id],
    queryFn: () => listPets(user.id),
    staleTime: 2 * 60 * 1000, // 2 Mins,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return {
    pets: pets.data,
    myPets: myPets.data,
    myPetsIsLoading: myPets.isLoading,
    isLoading: pets.isLoading,
  }
}

export default useFetchPetsQuery
