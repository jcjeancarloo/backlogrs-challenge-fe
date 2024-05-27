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
import Link from 'next/link'

export default function Signup() {
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Criar conta</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crie sua conta</DialogTitle>
          <DialogDescription>Preencha os campos abaixo para criar sua conta.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" placeholder="Digite seu nome" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <Input className="col-span-3" id="email" placeholder="Digite seu email" type="email" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="password">
              Senha
            </Label>
            <Input
              className="col-span-3"
              id="password"
              placeholder="Digite sua senha"
              type="password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" type="submit">
            Criar conta
          </Button>
        </DialogFooter>
        <div className="text-center text-sm text-gray-500 mt-4">
          Já tem uma conta?
          <Link className="underline" href="/auth">
            Faça login
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
