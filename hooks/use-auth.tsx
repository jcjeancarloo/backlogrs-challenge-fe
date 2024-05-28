'use client'
import { useToast } from '@/components/ui/use-toast'
import api from '@/lib/axios'
import useUserStore from '@/store/user'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import Cookies from 'js-cookie'

const useAuth = () => {
  const { logged } = useUserStore()
  const router = useRouter()
  const { toast } = useToast()

  const auth = async ({ email, password }: { email: string; password: string }) => {
    const { data } = await api.post('/auth', { email, password })
    return data
  }

  const forgotPassword = async (email: string) => {
    const { data } = await api.post('/auth/reset-password', email)
    return data
  }

  const resetPassword = async ({
    email,
    codeValidation,
    password,
  }: {
    email: string
    codeValidation: string
    password: string
  }) => {
    const { data } = await api.post('/auth/set-new-password', {
      email,
      codeValidation,
      newPassword: password,
    })
    return data
  }

  const loginMutation = useMutation({
    mutationFn: auth,
    onSuccess: (data: any) => {
      logged({
        name: data.name,
        email: data.email,
        avatar: data.avatar,
      })
      Cookies.set('token', data.access_token)
      // router.push('/dashboard')
    },
    onError: (error: any) => {
      console.log(error)
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  const login = (credentials: { email: string; password: string }) =>
    loginMutation.mutateAsync(credentials)

  const logout = () => {
    useUserStore.persist.clearStorage()
    router.push('/')
  }

  const forgotMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast({
        title: 'Nice!',
        variant: 'success',
        description: 'E-mail enviado com sucesso',
      })
      router.push('/new-password')
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  const forgot = (email: string) => forgotMutation.mutateAsync(email)

  const newPassMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast({
        title: 'Nice!',
        description: 'Senha modificada com sucesso',
      })
      router.push('/auth')
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

  const newPass = (data: { email: string; codeValidation: string; password: string }) =>
    newPassMutation.mutateAsync(data)

  return {
    login,
    logout,
    isLoading: loginMutation.isPending,
    forgot,
    forgotLoading: forgotMutation.isPending,
    newPass,
    newPassLoading: newPassMutation.isPending,
  }
}

export default useAuth
