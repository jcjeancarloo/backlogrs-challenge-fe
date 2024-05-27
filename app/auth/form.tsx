import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Form() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Faça login na sua conta</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Insira seu e-mail e senha abaixo para acessar sua conta.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" placeholder="exemplo@email.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Entrar
        </Button>
        <Link className="inline-block w-full text-center text-sm underline" href="/forgot-pass">
          Esqueci minha senha
        </Link>
      </div>
    </div>
  )
}
