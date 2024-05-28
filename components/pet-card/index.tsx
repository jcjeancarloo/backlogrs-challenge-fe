import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { PetItem } from '@/shared/types'
import { BoneIcon, CalendarIcon, EqualIcon, PawPrintIcon, WeightIcon } from 'lucide-react'
import Image from 'next/image'
import ConfirmAdoption from '../confirm-adoption'

type PetCardProps = PetItem
export default function PetCard({
  id,
  name,
  animal,
  breed,
  sex,
  isAvailable,
  age,
  photo,
  weight,
  description,
  userId,
}: PetCardProps) {
  return (
    <Card className="md:max-w-md w-full">
      <CardContent className="grid gap-4">
        <div className="relative group mt-4">
          <Image
            alt="Imagem do Pet"
            className="rounded-lg object-cover w-full aspect-video"
            height={300}
            src={photo || ''}
            width={400}
          />
        </div>
        <div className="grid">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{name}</h3>
            <Badge className="px-2 py-1 rounded-full" variant="outline">
              {isAvailable ? 'Disponível' : 'Indisponível'}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <BoneIcon className="w-4 h-4 text-gray-500" />
                <p className="text-sm text-gray-500">Animal</p>
              </div>
              <p>{animal === 'dog' ? 'Cachorro' : 'Gato'}</p>
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
          <p className="text-gray-500 text-justify text-sm mb-4">{description}</p>
          <ConfirmAdoption
            id={id}
            age={age}
            animal={animal}
            breed={breed}
            sex={sex}
            name={name}
            weight={2}
            photo={photo}
            description={description}
            userId={userId}
            isAvailable={isAvailable}
          />
        </div>
      </CardContent>
    </Card>
  )
}
