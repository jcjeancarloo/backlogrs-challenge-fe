import Link from 'next/link'
import PetCard from '../pet-card'

export default function FeaturedPets() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Encontre seu pet
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra seu novo amigo peludo.
            </p>
          </div>
          <Link href="#">Ver Todos os Pets</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <PetCard
            name="Buddy"
            breed="Golden Retriever"
            gender="male"
            weight={10}
            age={3}
            description="Buddy é um Golden Retriever cheio de energia e amor para dar. Ele adora brincar e fazer
            novas amizades. Seu temperamento amigável o torna o companheiro perfeito para famílias e
            crianças."
            img=""
            isAvailable
          />
          <PetCard
            name="Buddy"
            breed="Golden Retriever"
            gender="male"
            weight={10}
            age={3}
            description="Buddy é um Golden Retriever cheio de energia e amor para dar. Ele adora brincar e fazer
            novas amizades. Seu temperamento amigável o torna o companheiro perfeito para famílias e
            crianças."
            img=""
            isAvailable
          />
          <PetCard
            name="Buddy"
            breed="Golden Retriever"
            gender="male"
            weight={10}
            age={3}
            description="Buddy é um Golden Retriever cheio de energia e amor para dar. Ele adora brincar e fazer
            novas amizades. Seu temperamento amigável o torna o companheiro perfeito para famílias e
            crianças."
            img=""
            isAvailable
          />
        </div>
      </div>
    </section>
  )
}
