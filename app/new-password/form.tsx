'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAuth from '@/hooks/use-auth'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const { newPass, newPassLoading } = useAuth()

  const handleNewPass = (data: any) => newPass(data)
  const { register, handleSubmit } = useForm()

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Redefinir Senha</h1>
        <p className="text-gray-500">
          Insira o código de recuperação e defina uma nova senha para sua conta.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(handleNewPass)}>
        <div className="space-y-2">
          <Label htmlFor="email">Código de Recuperação</Label>
          <Input
            id="email"
            placeholder="Digite o email"
            required
            type="text"
            {...register('email')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="codeValidation">Código de Recuperação</Label>
          <Input
            id="codeValidation"
            placeholder="Digite o código"
            required
            type="text"
            {...register('codeValidation')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">Nova Senha</Label>
          <Input
            id="newPassword"
            placeholder="Digite a nova senha"
            required
            type="password"
            {...register('password')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar senha </Label>
          <Input
            id="confirmPassword"
            placeholder="Confirme a nova senha"
            required
            type="password"
          />
        </div>
        <Button className="w-full" type="submit" disabled={newPassLoading}>
          {newPassLoading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span>Carregando</span>
            </div>
          ) : (
            'Enviar'
          )}
        </Button>
      </form>
    </div>
  )
}
