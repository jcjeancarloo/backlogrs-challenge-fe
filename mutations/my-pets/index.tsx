import { toast } from '@/components/ui/use-toast'
import api from '@/lib/axios'
import useUserStore from '@/store/user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import FormData from 'form-data'
import { useRouter } from 'next/navigation'

const useMyPetsMutation = () => {
  const queryClient = useQueryClient()
  const { user } = useUserStore()
  const router = useRouter()

  // API CALLS
  const addNewPet = async (data: any) => {
    const formData = new FormData()
    formData.append('file', data.photo[0])

    const createdPet = await api.post('/pets', { ...data, photo: 'temp-name' })
    const uploadedImage = await api.post('/upload-img', formData)
    return await api.put(`pets/${createdPet.data.id}`, { photo: uploadedImage.data.imgUrl })
  }

  const deletePet = async (id: string) => await api.delete(`/pets/${id}`)
  const adoptPet = async (id: string) => await api.patch(`/pets/${id}`, { userId: user.id })
  const setToAdoption = async ({ id, option }: { id: string; option: boolean }) =>
    await api.put(`/pets/${id}`, { isAvailable: option })

  const createMutation = useMutation({ mutationFn: addNewPet })

  const create = (data: any, handleOpen: (open: boolean) => void, reset: () => void) =>
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: 'Boa!',
          variant: 'success',
          description: 'Seu pet foi adicionado com sucesso',
        })
        queryClient.invalidateQueries({ queryKey: ['my-pets', user.id] })
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
    mutationFn: (id: string) => deletePet(id),
    onSuccess: () => {
      toast({
        title: 'Boa!',
        variant: 'success',
        description: 'Seu pet foi removido com sucesso',
      })
      queryClient.invalidateQueries({ queryKey: ['my-pets', user.id] })
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
      queryClient.invalidateQueries({ queryKey: ['my-pets', user.id] })
      queryClient.invalidateQueries({ queryKey: ['list-pets'] })
      router.push('/my-pets')
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  const setToAdoptionMutation = useMutation({
    mutationFn: ({ id, option }: { id: string; option: boolean }) => setToAdoption({ id, option }),
    onSuccess: () => {
      toast({
        title: 'Boa!',
        variant: 'success',
        description: 'Pet colocado para adoção com sucesso! 😃',
      })
      queryClient.invalidateQueries({ queryKey: ['my-pets', user.id] })
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

  return {
    addNewPet: create,
    addNewPetLoading: createMutation.isPending,
    deletePet: deleteMutation.mutate,
    adoptPet: adoptMutation.mutate,
    adoptPetLoading: adoptMutation.isPending,
    setToAdoption: setToAdoptionMutation.mutate,
    setToAdoptionLoading: setToAdoptionMutation.isPending,
  }
}

export default useMyPetsMutation
