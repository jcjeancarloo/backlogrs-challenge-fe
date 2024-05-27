import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Form() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Esqueceu sua senha?</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Insira seu email cadastrado e enviaremos um link para redefinir sua senha.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <Button className="w-full" type="submit">
            Redefinir senha
          </Button>
        </form>
        <div className="">
          <Link className="inline-block w-full text-center text-sm underline" href="/auth">
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  )
}
