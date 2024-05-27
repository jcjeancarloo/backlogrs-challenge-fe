import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
import ConfirmAdoption from '../confirm-adoption'

type PetCardProps = PetItem
export default function PetCard({
  name,
  animal,
  breed,
  sex,
  isAvailable = true,
  age,
  img,
  weight,
  description,
}: PetCardProps) {
  return (
    <Card className="max-w-md w-full">
      <CardContent className="grid gap-4">
        <div className="relative group">
          <Image
            alt="Imagem do Pet"
            className="rounded-lg object-cover w-full aspect-video"
            height={300}
            src={img || ''}
            width={400}
          />
          <Button
            className="absolute top-2 right-2 bg-white/50 hover:bg-white rounded-full"
            size="icon"
            variant="ghost"
          >
            <HeartIcon className="w-5 h-5" />
            <span className="sr-only">Favoritar</span>
          </Button>
        </div>
        <div className="grid gap-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{name}</h3>
            <Badge className="px-2 py-1 rounded-full" variant="outline">
              {isAvailable ? 'Disponível' : 'Indisponível'}
            </Badge>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 py-4">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <BoneIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Animal</p>
              </div>
              <p>{animal}</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <PawPrintIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Raça</p>
              </div>
              <p>{breed}</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Idade</p>
              </div>
              <p>{age} anos</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <EqualIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Gênero</p>
              </div>
              <p>{sex === 'male' ? 'Macho' : 'Fêmea'}</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <WeightIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Peso</p>
              </div>
              <p>{weight} kg</p>
            </div>
          </div>
          <p className="text-gray-500 text-justify text-sm">{description}</p>
          <ConfirmAdoption
            age={age}
            animal={animal}
            breed={breed}
            sex={sex}
            name={name}
            weight={2}
            img={img}
            description={description}
          />
        </div>
      </CardContent>
    </Card>
  )
}
