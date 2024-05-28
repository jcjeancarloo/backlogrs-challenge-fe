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
  reset: () => void
}

const INITIAL_STATE = {
  id: '',
  name: '',
  email: '',
}

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: INITIAL_STATE,
      isAuthenticated: false,
      logged: (user) => set(() => ({ user })),
      setAuthenticated: (isAuthenticated: boolean) => set(() => ({ isAuthenticated })),
      reset: () => set(() => ({ user: INITIAL_STATE })),
    }),
    {
      name: 'app',
    }
  )
)

export default useUserStore
