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
import {
  BoneIcon,
  CalendarIcon,
  EqualIcon,
  HeartIcon,
  PawPrintIcon,
  WeightIcon,
} from 'lucide-react'
import Image from 'next/image'

type ConfirmAdoptionProps = Omit<PetItem, 'isAvailable'>

export default function ConfirmAdoption({
  age,
  breed,
  description,
  sex,
  photo,
  name,
  weight,
}: ConfirmAdoptionProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-x-2" variant="default">
          <HeartIcon className="h-4 w-4" /> Adotar {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[600px]">
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
              src={photo}
              style={{
                aspectRatio: '100/100',
                objectFit: 'cover',
              }}
              width={100}
            />
            <div className="grid gap-4">
              <div className="font-medium">{name}</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BoneIcon className="w-4 h-4" />
                  <span className="font-medium">Animal:</span>
                  Cachorro
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <PawPrintIcon className="w-4 h-4" />
                  <span className="font-medium">Raça:</span>
                  {breed}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <EqualIcon className="w-4 h-4" />
                  <span className="font-medium">Gênero:</span>
                  {sex === 'male' ? 'Macho' : 'Fêmea'}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Idade:</span>
                  {age} anos
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <WeightIcon className="w-4 h-4" />
                  <span className="font-medium">Peso:</span>
                  {weight} kg
                </div>
              </div>
              <div className="text-sm text-gray-500">{description}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Importante: A retirada do pet deve ser combinada com o seu dono atual.
          </div>
          <div className="flex items-center justify-between  -mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                Eu li e aceito os
                <span className="underline"> termos de adoção </span>
              </Label>
            </div>
            <DialogFooter className="flex flex-row items-center space-x-2">
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
