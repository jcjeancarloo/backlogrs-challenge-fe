import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { PetItem } from '@/shared/types'
import { CalendarIcon, EqualIcon, PawPrintIcon, WeightIcon } from 'lucide-react'
import Image from 'next/image'

type ConfirmAdoptionProps = Omit<PetItem, 'isAvailable'>

export default function ConfirmAdoption({
  age,
  breed,
  description,
  gender,
  img,
  name,
  weight,
}: ConfirmAdoptionProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full" variant="default">
          Adotar Pet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Confirmar Adoção</DialogTitle>
          <DialogDescription>
            Revise as informações do pet e aceite os termos de adoção.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-[100px_1fr] items-start gap-4">
            <Image
              alt="Pet"
              className="rounded-lg object-cover"
              height={100}
              src={img}
              style={{
                aspectRatio: '100/100',
                objectFit: 'cover',
              }}
              width={100}
            />
            <div className="grid gap-4">
              <div className="font-medium">{name}</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <PawPrintIcon className="w-4 h-4" />
                  <span className="font-medium">Raça:</span>
                  {breed}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <EqualIcon className="w-4 h-4" />
                  <span className="font-medium">Gênero:</span>
                  {gender === 'male' ? 'Macho' : 'Fêmea'}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Idade:</span>
                  {age} anos
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <WeightIcon className="w-4 h-4" />
                  <span className="font-medium">Peso:</span>
                  {weight} kg
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Importante: A retirada do pet deve ser combinada com o seu dono atual.
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                Eu li e aceito os
                <span className="underline"> termos de adoção </span>
              </Label>
            </div>
            <DialogFooter className="flex items-center space-x-2">
              <DialogClose>
                <Button variant="ghost">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Adotar</Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
