'use client'

import useMyPetsMutation from '@/mutations/my-pets'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CAT_BREEDS, DOG_BREEDS } from '@/shared/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
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

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import LoadingButton from '../loading-button'
import validationSchema from './validationSchema'

export default function AddNewPet() {
  const { addNewPet, addNewPetLoading } = useMyPetsMutation()

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), mode: 'all' })

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentBreeds, setCurrentBreeds] = useState<string[]>(DOG_BREEDS)

  const handleDialog = (open: boolean) => {
    setIsOpen(open)
    if (open === false) clearErrors()
  }

  const handleNewPet = (data: any) => {
    data.photo =
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhY2hvcnJvfGVufDB8fDB8fHww'
    addNewPet(data, handleDialog, reset)
  }

  const ErrorMessage = ({ message }: { message: string }) => (
    <div className="w-full flex items-center justify-center -mt-2 -ml-12">
      <span className="text-red-500 text-sm">{message}</span>
    </div>
  )

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-x-2" onClick={() => handleDialog(true)}>
          <PlusIcon className="h-4 w-4" />
          Adicionar Pet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Novo Pet</DialogTitle>
          <DialogDescription>
            Preencha o formulário para adicionar um novo pet à sua conta.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(handleNewPet)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              className="col-span-3"
              id="name"
              placeholder="Digite o nome do pet"
              {...register('name')}
            />
          </div>
          {errors.name && <ErrorMessage message={errors.name.message as string} />}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="animal">
              Animal
            </Label>
            <div className="col-span-3">
              <RadioGroup
                defaultValue="dog"
                id="animal"
                {...register('animal')}
                onValueChange={(e) => {
                  setCurrentBreeds(e === 'dog' ? DOG_BREEDS : CAT_BREEDS)
                  setValue('animal', e)
                }}
              >
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="dog">
                    <RadioGroupItem id="dog" value="dog" />
                    Cachorro
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="cat">
                    <RadioGroupItem id="cat" value="cat" />
                    Gato
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="breed">
              Raça
            </Label>
            <div className="col-span-3">
              <Select onValueChange={(e) => setValue('breed', e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a raça" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {currentBreeds.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {errors.breed && <ErrorMessage message={errors.breed.message as string} />}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="age">
              Idade
            </Label>
            <Input
              className="col-span-3"
              id="age"
              placeholder="Digite a idade do pet"
              type="number"
              min={1}
              defaultValue={1}
              {...register('age')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="weight">
              Peso
            </Label>
            <Input
              className="col-span-3"
              id="weight"
              placeholder="Digite o peso do pet"
              type="number"
              min={1}
              defaultValue={1}
              {...register('weight')}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 py-2">
            <Label className="text-right" htmlFor="sex">
              Sexo
            </Label>
            <div className="col-span-3">
              <RadioGroup
                defaultValue="male"
                id="sex"
                {...register('sex')}
                onValueChange={(e) => setValue('sex', e)}
              >
                <div className="flex items-center gap-4">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="male">
                    <RadioGroupItem id="male" value="male" />
                    Macho
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="female">
                    <RadioGroupItem id="female" value="female" />
                    Fêmea
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="foto">
              Foto
            </Label>
            <div className="col-span-3">
              <Input id="photo" type="file" {...register('photo')} />
            </div>
          </div>
          {errors.photo && <ErrorMessage message={errors.photo.message as string} />}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              placeholder="Digite a descrição do pet"
              {...register('description')}
            />
          </div>
          {errors.description && <ErrorMessage message={errors.description.message as string} />}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" onClick={() => handleDialog(false)} type="button">
                Cancelar
              </Button>
            </DialogClose>

            <div className="w-30">
              <LoadingButton isLoading={addNewPetLoading} text="Salvar" />
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
