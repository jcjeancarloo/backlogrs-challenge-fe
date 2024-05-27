import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Form() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Redefinir Senha</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Insira o código de recuperação e defina uma nova senha para sua conta.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recoveryCode">Código de Recuperação</Label>
          <Input id="recoveryCode" placeholder="Digite o código" required type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">Nova Senha</Label>
          <Input id="newPassword" placeholder="Digite a nova senha" required type="password" />
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
        <Button className="w-full" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  )
}
