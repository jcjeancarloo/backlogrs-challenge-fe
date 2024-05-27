import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  name: string
  email: string
  avatar: string
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
        avatar: '',
      },
      logged: (user) => set(() => ({ user })),
    }),
    {
      name: 'app',
    }
  )
)

export default useUserStore
