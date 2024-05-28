import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, PawPrintIcon, UserIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

type AuthenticatedProps = {
  username: string
  logout: () => void
}

const Authenticated = ({ username, logout }: AuthenticatedProps) => {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-x-2">
          <UserIcon className="h-4 w-4" />
          Minha conta
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-x-2" onClick={() => router.push('/my-pets')}>
          <PawPrintIcon className="h-4 w-4" /> Meus pets
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-x-2" onClick={logout}>
          <LogOutIcon className="h-4 w-4" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Authenticated
