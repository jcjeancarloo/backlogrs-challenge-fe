import { useToast } from '@/components/ui/use-toast'
import api from '@/lib/axios'
import useUserStore from '@/store/user'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import Cookies from 'js-cookie'

type ResetPassword = {
  email: string
  codeValidation: string
  password: string
}

type Signup = {
  name: string
  email: string
  password: string
}

const useAuth = () => {
  const { logged } = useUserStore()
  const router = useRouter()
  const { toast } = useToast()

  // API CALLS
  const auth = async ({ email, password }: { email: string; password: string }) => {
    const { data } = await api.post('/auth', { email, password })
    return data
  }

  const forgotPassword = async (email: string) => {
    const { data } = await api.post('/auth/reset-password', email)
    return data
  }

  const resetPassword = async ({ email, codeValidation, password }: ResetPassword) => {
    const { data } = await api.post('/auth/set-new-password', {
      email,
      codeValidation,
      newPassword: password,
    })
    return data
  }

  const signup = async (data: any) => await api.post('/users', data)

  // MUTATIONS
  const loginMutation = useMutation({
    mutationFn: auth,
    onSuccess: (data: any) => {
      logged({
        name: data.name,
        email: data.email,
      })
      Cookies.set('token', data.access_token)
      router.back()
    },
    onError: (error: any) => {
      toast({
        title: 'Ooops :( ',
        variant: 'destructive',
        description: error.response.data.message,
      })
    },
  })

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

  const signUpMutation = useMutation({ mutationFn: signup })

  const signUp = (data: Signup) =>
    signUpMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: 'Boa!',
          variant: 'success',
          description: 'Seja bem vindo 😃',
        })
        loginMutation.mutate({ email: data.email, password: data.password })
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

  const logout = () => {
    useUserStore.persist.clearStorage()
    Cookies.remove('token')
    router.push('/')
  }

  const isAuthenticated = Cookies.get('token')

  return {
    login: (credentials: { email: string; password: string }) => loginMutation.mutate(credentials),
    forgot: (email: string) => forgotMutation.mutate(email),
    newPass: (data: ResetPassword) => newPassMutation.mutate(data),
    signup: signUp,
    isLoading: loginMutation.isPending,
    forgotLoading: forgotMutation.isPending,
    newPassLoading: newPassMutation.isPending,
    signupLoading: signUpMutation.isPending,
    logout,
    isAuthenticated,
  }
}

export default useAuth
