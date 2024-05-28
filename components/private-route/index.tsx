import useAuth from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

type PrivateRouteProps = {
  children: ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth')
  }, [isAuthenticated, router])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  )
}
