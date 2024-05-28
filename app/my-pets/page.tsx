'use client'
import ListCardLoading from '@/components/list-card-loading'
import PetList from '@/components/pet-list'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useFetchPetsQuery from '@/queries/list-pets'
import { FilterIcon } from 'lucide-react'

export default function Page() {
  const { pets, isLoading } = useFetchPetsQuery()

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">Olá, usuário</h1>
          <p className="text-sm text-gray-500">Confira abaixo seus pets</p>
        </div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="flex items-center gap-2" variant="outline">
                <FilterIcon className="w-5 h-5" />
                Filtros
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="breed">Raça</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a raça" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="labrador">Labrador</SelectItem>
                    <SelectItem value="golden">Golden Retriever</SelectItem>
                    <SelectItem value="bulldog">Bulldog</SelectItem>
                    <SelectItem value="poodle">Poodle</SelectItem>
                    <SelectItem value="siames">Siamês</SelectItem>
                    <SelectItem value="persa">Persa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sex">Sexo</Label>
                <RadioGroup defaultValue="all" id="sex">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="sex-all" value="all" />
                    <Label htmlFor="sex-all">Todos</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="male" value="male" />
                    <Label htmlFor="male">Macho</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="female" value="female" />
                    <Label htmlFor="female">Fêmea</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Tipo</Label>
                <RadioGroup defaultValue="all" id="type">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="type-all" value="all" />
                    <Label htmlFor="type-all">Todos</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="type-dog" value="dog" />
                    <Label htmlFor="type-dog">Cachorro</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="type-cat" value="cat" />
                    <Label htmlFor="type-cat">Gato</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">Idade</Label>
                <div className="flex items-center gap-2">
                  <Input className="w-1/2" id="age-min" placeholder="Idade mínima" type="number" />
                  <span>-</span>
                  <Input className="w-1/2" id="age-max" placeholder="Idade máxima" type="number" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="weight">Peso</Label>
                <div className="flex items-center gap-2">
                  <Input
                    className="w-1/2"
                    id="weight-min"
                    placeholder="Peso mínimo (kg)"
                    type="number"
                  />
                  <span>-</span>
                  <Input
                    className="w-1/2"
                    id="weight-max"
                    placeholder="Peso máximo (kg)"
                    type="number"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <RadioGroup defaultValue="all" id="status">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="status-all" value="all" />
                    <Label htmlFor="status-all">Todos</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="status-available" value="available" />
                    <Label htmlFor="status-available">Disponível</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="status-adopted" value="adopted" />
                    <Label htmlFor="status-adopted">Adotado</Label>
                  </div>
                </RadioGroup>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {isLoading ? <ListCardLoading length={3} /> : <PetList list={pets} />}
    </div>
  )
}
