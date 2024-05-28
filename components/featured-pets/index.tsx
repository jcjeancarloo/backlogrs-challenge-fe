import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { PetItem } from '@/shared/types'
import useUserStore from '@/store/user'
import Link from 'next/link'
import PetCard from '../pet-card'

type FeaturedPetsProps = {
  canEdit: boolean
  list: PetItem[]
}

export default function FeaturedPets({ list, canEdit }: FeaturedPetsProps) {
  const { user } = useUserStore()
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Encontre seu pet
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra seu novo amigo peludo.
            </p>
          </div>
          <Link href="/find">Ver Todos os Pets</Link>
        </div>
        <div className="mt-4">
          <Carousel
            className="w-[60vw] sm:w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {list.slice(0, 10).map((item: PetItem) => (
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
                      canEdit={canEdit}
                      authUserId={user.id}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
