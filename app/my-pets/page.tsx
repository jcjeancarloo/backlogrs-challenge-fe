'use client'
import AddNewPet from '@/components/add-new-pet'
import ListCardLoading from '@/components/list-card-loading'
import PetCard from '@/components/pet-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import useMyPetsMutation from '@/mutations/my-pets'
import useFetchPetsQuery from '@/queries/list-pets'
import { PetItem } from '@/shared/types'
import useUserStore from '@/store/user'

export default function Page() {
  const { myPets, myPetsIsLoading } = useFetchPetsQuery()
  const { setToAdoption, deletePet } = useMyPetsMutation()
  const { user } = useUserStore()

  return (
    <div className="w-full container px-4 md:px-24 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">Olá, {user.name}</h1>
          <p className="text-sm text-gray-500">Confira abaixo seus pets</p>
        </div>
        <div className="flex items-center gap-4">
          <AddNewPet />
        </div>
      </div>
      {myPetsIsLoading ? (
        <ListCardLoading length={3} />
      ) : (
        <div className="flex mt-4 w-full justify-center">
          {myPets.length > 0 ? (
            <Carousel
              className="w-[70vw] sm:w-full"
              opts={{
                align: 'start',
                loop: false,
              }}
            >
              <CarouselContent>
                {myPets.map((item: PetItem) => (
                  <CarouselItem key={item.id} className="pl-4  md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <PetCard
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
                        canEdit={true}
                        authUserId={user.id}
                        handleSetToAdoption={() =>
                          setToAdoption({ id: item.id, option: !item.isAvailable })
                        }
                        handleRemovePet={() => deletePet(item.id)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <span>Nenhum pet encontrado</span>
          )}
        </div>
      )}
    </div>
  )
}
