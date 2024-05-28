import { z } from 'zod'

export default z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  breed: z.string().min(1, 'Raça é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatório'),
  photo: z.any().refine((files) => files?.length > 0, 'Foto é obrigatório'),
  weight: z.string(),
  age: z.string(),
  animal: z.string(),
  sex: z.string(),
})
