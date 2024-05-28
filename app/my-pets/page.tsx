'use client'
import AddNewPet from '@/components/add-new-pet'
import ListCardLoading from '@/components/list-card-loading'
import PetList from '@/components/pet-list'
import useFetchPetsQuery from '@/queries/list-pets'
import useUserStore from '@/store/user'

export default function Page() {
  const { myPets, myPetsIsLoading } = useFetchPetsQuery()
  const { user } = useUserStore()

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">Olá, {user.name}</h1>
          <p className="text-sm text-gray-500">Confira abaixo seus pets</p>
        </div>
        <div className="flex items-center gap-4">
          <AddNewPet />
        </div>
      </div>
      {myPetsIsLoading ? <ListCardLoading length={3} /> : <PetList list={myPets || []} canEdit />}
    </div>
  )
}
