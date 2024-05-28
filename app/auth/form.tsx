'use client'

import LoadingButton from '@/components/loading-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuth from '@/hooks/use-auth'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function Form() {
  const { login, isLoading } = useAuth()
  const handleAuth = (data: any) => login(data)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form className="mx-auto max-w-sm space-y-6" onSubmit={handleSubmit(handleAuth)}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Faça login na sua conta</h1>
        <p className="text-gray-500">Insira seu e-mail e senha abaixo para acessar sua conta.</p>
      </div>
      <div className="space-y-4">
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
        <LoadingButton isLoading={isLoading} text="Entrar" />
        <Link className="inline-block w-full text-center text-sm underline" href="/forgot-pass">
          Esqueci minha senha
        </Link>
      </div>
    </form>
  )
}
