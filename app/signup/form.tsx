'use client'

import LoadingButton from '@/components/loading-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuth from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import validationSchema from './validationSchema'

export default function Form() {
  const { signup, signupLoading } = useAuth()
  const handleSignup = (data: any) => signup(data)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), mode: 'onSubmit' })

  return (
    <form className="mx-auto max-w-sm space-y-6" onSubmit={handleSubmit(handleSignup)}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Crie sua conta</h1>
        <p className="text-gray-500">Preencha os campos abaixo para criar sua conta.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Nome" required type="name" {...register('name')} />
          {errors.name && (
            <span className="text-red-400 text-sm -mt-3">{errors.name.message as string}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="exemplo@email.com"
            required
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-400 text-sm -mt-3">{errors.email.message as string}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" required type="password" {...register('password')} />
          {errors.password && (
            <span className="text-red-400 text-sm -mt-3">{errors.password.message as string}</span>
          )}
        </div>
        <LoadingButton isLoading={signupLoading} text="Criar conta" />
        <div className="flex items-center justify-center w-full gap-x-1">
          <span className="text-sm ">Já possui uma conta?</span>
          <Link className="flex text-center text-sm underline  justify-end" href="/auth">
            Faça login
          </Link>
        </div>
      </div>
    </form>
  )
}
