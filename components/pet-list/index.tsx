import useMyPetsMutation from '@/mutations/my-pets'
import { PetItem } from '@/shared/types'
import useUserStore from '@/store/user'
import PetCard from '../pet-card'

type PetListProps = {
  list: PetItem[]
  canEdit: boolean
}
export default function PetList({ list, canEdit }: PetListProps) {
  const { setToAdoption, deletePet } = useMyPetsMutation()
  const { user } = useUserStore()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {list.length > 0 ? (
        list.map((item: PetItem) => (
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
            isAvailable={item.isAvailable}
            canEdit={canEdit}
            authUserId={user.id}
            handleSetToAdoption={() => setToAdoption({ id: item.id, option: !item.isAvailable })}
            handleRemovePet={() => deletePet(item.id)}
          />
        ))
      ) : (
        <span>Nenhum pet encontrado</span>
      )}
    </div>
  )
}
