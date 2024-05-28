import { toast } from '@/components/ui/use-toast'
import api from '@/lib/axios'
import useUserStore from '@/store/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useMyPetsMutation = () => {
  const queryClient = useQueryClient()
  const { user } = useUserStore()

  // API CALLS
  const addNewPet = async (data: any) => {
    let isAvailable = data.isAvailable || false
    data.isAvailable = isAvailable
    await api.post('/pets', { ...data, userId: user.id })
  }

  const deletePet = async (id: number) => await api.delete(`/pets/${id}`)

  const adoptPet = async (id: string) => {
    await api.patch(`/pets/${id}`, { userId: user.id })
  }

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
      queryClient.invalidateQueries({ queryKey: ['list-pets'] })
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  const adoptMutation = useMutation({
    mutationFn: (id: string) => adoptPet(id),
    onSuccess: () => {
      toast({
        title: 'Boa!',
        variant: 'success',
        description: 'Pet adotado com sucesso! 😃',
      })
      queryClient.invalidateQueries({ queryKey: ['my-pets', 'list-pets'] })
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
    adoptPet: adoptMutation.mutate,
    adoptPetLoading: adoptMutation.isPending,
  }
}

export default useMyPetsMutation
