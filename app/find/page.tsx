'use client'

import ListCardLoading from '@/components/list-card-loading'
import PetList from '@/components/pet-list'
import useFetchPetsQuery from '@/queries/list-pets'

export default function Page() {
  const { pets, isLoading } = useFetchPetsQuery()
  return (
    <div className="w-full container px-4 md:px-24 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Encontre aqui seu amigo</h1>
      </div>
      {isLoading ? <ListCardLoading length={3} /> : <PetList list={pets || []} canEdit={false} />}
    </div>
  )
}
