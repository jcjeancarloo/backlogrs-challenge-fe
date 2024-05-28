import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  name: string
  email: string
}

type UserStore = {
  user: User
  isAuthenticated: boolean
  logged: (user: User) => void
  setAuthenticated: (isAuthenticated: boolean) => void
}

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: {
        id: '',
        name: '',
        email: '',
      },
      isAuthenticated: false,
      logged: (user) => set(() => ({ user })),
      setAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
    }),
    {
      name: 'app',
    }
  )
)

export default useUserStore
