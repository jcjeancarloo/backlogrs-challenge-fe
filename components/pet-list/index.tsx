import { PetItem } from '@/shared/types'
import PetCard from '../pet-card'

export default function PetList({ list }: { list: PetItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {list.length > 0 ? (
        list.map((item) => (
          <PetCard
            key={item.id}
            id={item.id}
            userId={item.userId}
            name={item.name}
            animal={item.animal}
            breed={item.breed}
            sex={item.sex}
            weight={item.weight}
            age={item.age}
            description={item.description}
            photo={item.photo}
            isAvailable
          />
        ))
      ) : (
        <span>Nenhum pet encontrado</span>
      )}
    </div>
  )
}
