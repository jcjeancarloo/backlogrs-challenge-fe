'use client'
import useAuth from '@/hooks/use-auth'
import useUserStore from '@/store/user'
import Image from 'next/image'
import Link from 'next/link'
import Authenticated from './authenticated'
import Guest from './guest'
export default function Navbar() {
  const { isAuthenticated, logout } = useAuth()
  const { user } = useUserStore()

  return (
    <header className="container flex h-16 items-center justify-between px-4 md:px-24">
      <Link className="flex items-center gap-2" href="/">
        <Image className="rounded-md mb-4" alt="Logo" height="80" src="/logo-hor.png" width="150" />
      </Link>
      <div className="flex items-center justify-end gap-4  w-1/2 sm:-mr-4 mr-0">
        {isAuthenticated ? <Authenticated username={user.name} logout={logout} /> : <Guest />}
      </div>
    </header>
  )
}
