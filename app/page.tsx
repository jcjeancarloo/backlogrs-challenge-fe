'use client'

import FeaturedPets from '@/components/featured-pets'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import ListCardLoading from '@/components/list-card-loading'
import useFetchPetsQuery from '@/queries/list-pets'

export default function Home() {
  const { pets, isLoading } = useFetchPetsQuery()

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="mb-auto">
        <Hero />
        <HowItWorks />

        {isLoading ? (
          <ListCardLoading length={3} />
        ) : (
          pets.length > 0 && <FeaturedPets list={pets} canEdit={false} />
        )}
      </main>
    </div>
  )
}
