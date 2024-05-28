export type PetItem = {
  id: string
  userId: string
  name: string
  animal: 'dog' | 'cat'
  photo: string
  isAvailable: boolean
  breed: string
  sex: 'male' | 'female'
  age: number
  description: string
  weight: number
}

export type ModalType = 'login' | 'signup' | 'forgot'
