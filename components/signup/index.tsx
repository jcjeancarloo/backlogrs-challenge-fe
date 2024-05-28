'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuth from '@/hooks/use-auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import LoadingButton from '../loading-button'
import validationSchema from './validationSchema'

export default function Signup() {
  const { signup, signupLoading } = useAuth()
  const handleSignup = (data: any) => signup(data)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), mode: 'onSubmit' })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar conta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crie sua conta</DialogTitle>
          <DialogDescription>Preencha os campos abaixo para criar sua conta.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="name">
                Nome
              </Label>
              <Input
                className="col-span-3"
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
              />
            </div>
            {errors.name && (
              <span className="text-red-500 text-sm w-full flex justify-end -mt-2">
                {errors.name.message as string}
              </span>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="email">
                Email
              </Label>
              <Input
                className="col-span-3"
                id="email"
                placeholder="Digite seu email"
                type="email"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm w-full flex justify-end -mt-2">
                {errors.email.message as string}
              </span>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="password">
                Senha
              </Label>
              <Input
                className="col-span-3"
                id="password"
                placeholder="Digite sua senha"
                type="password"
                {...register('password')}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm w-full flex justify-end -mt-2">
                {errors.password.message as string}
              </span>
            )}
          </div>
          <DialogFooter>
            <LoadingButton text="Criar conta" isLoading={signupLoading} />
          </DialogFooter>
          <div className="text-center text-sm text-gray-500 mt-4 flex justify-center gap-x-1">
            Já tem uma conta?
            <Link className="underline" href="/auth">
              Faça login
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
