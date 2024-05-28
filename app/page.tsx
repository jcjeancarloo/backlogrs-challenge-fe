'use client'

import FeaturedPets from '@/components/featured-pets'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import ListCardLoading from '@/components/list-card-loading'
import useFetchPetsQuery from '@/queries/list-pets'

export default function Home() {
  const { pets, isLoading } = useFetchPetsQuery()
  console.log(pets)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      {isLoading ? <ListCardLoading length={3} /> : <FeaturedPets list={pets} />}
      <HowItWorks />
    </main>
  )
}
