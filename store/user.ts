import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  name: string
  email: string
}

type UserStore = {
  user: User
  logged: (user: User) => void
}

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: {
        name: '',
        email: '',
      },
      logged: (user) => set(() => ({ user })),
    }),
    {
      name: 'app',
    }
  )
)

export default useUserStore
