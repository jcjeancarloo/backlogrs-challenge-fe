import api from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export const listPets = async () => {
  const { data } = await api.get(`/pets`)
  return data
}

const useFetchPetsQuery = () => {
  const pets = useQuery({
    queryKey: ['list-pets'],
    queryFn: listPets,
    staleTime: 2 * 60 * 1000, // 2 Mins,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return {
    pets: pets.data,
    isLoading: pets.isLoading,
  }
}

export default useFetchPetsQuery
