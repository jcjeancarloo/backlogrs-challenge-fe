import { toast } from '@/components/ui/use-toast'
import api from '@/lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useMyPetsMutation = () => {
  const queryClient = useQueryClient()

  // API CALLS
  const addNewPet = async (data: any) => {
    let isAvailable = data.isAvailable || false
    data.isAvailable = isAvailable
    await api.post('/pets', { ...data, userId: 'fd082382-365b-4ca8-a52c-3665008a02e5' })
  }

  const deletePet = async (id: number) => await api.delete(`/pets/${id}`)

  const createMutation = useMutation({ mutationFn: addNewPet })

  const create = (data: any, handleOpen: (open: boolean) => void, reset: () => void) =>
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: 'Boa!',
          variant: 'success',
          description: 'Seu pet foi adicionado com sucesso',
        })
        queryClient.invalidateQueries({ queryKey: ['list-pets'] })
        handleOpen(false)
        reset()
      },
      onError: (error: any) => {
        toast({
          title: 'Ooops :( ',
          variant: 'destructive',
          description: error.response.data.message,
        })
      },
    })

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePet(id),
    onSuccess: () => {
      toast({
        title: 'Boa!',
        variant: 'success',
        description: 'Seu pet foi removido com sucesso',
      })
      queryClient.invalidateQueries({ queryKey: ['benefits-list'] })
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  return {
    addNewPet: create,
    addNewPetLoading: createMutation.isPending,
    deletePet: deleteMutation.mutate,
  }
}

export default useMyPetsMutation
