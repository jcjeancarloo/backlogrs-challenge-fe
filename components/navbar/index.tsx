'use client'
import useAuth from '@/hooks/use-auth'
import useUserStore from '@/store/user'
import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import Authenticated from './authenticated'
import Guest from './guest'

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()
  const { user } = useUserStore()

  console.log({ isAuthenticated })

  return (
    <header className="container flex h-16 items-center justify-between px-4 md:px-24">
      <Link className="flex items-center gap-2" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Acme Inc</span>
      </Link>
      <div className="flex items-center justify-end gap-4  w-1/2 sm:-mr-4 mr-0">
        {isAuthenticated ? <Authenticated username={user.name} logout={logout} /> : <Guest />}
      </div>
    </header>
  )
}
