import { APP_ROUTES } from '@/shared/constants'

export const checkIsPublicRoute = (asPath: string) => {
  const publicRoutes = Object.values(APP_ROUTES.public)
  return publicRoutes.includes(asPath)
}
