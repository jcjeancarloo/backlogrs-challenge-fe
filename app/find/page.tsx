'use client'

import ListCardLoading from '@/components/list-card-loading'
import PetList from '@/components/pet-list'
import useFetchPetsQuery from '@/queries/list-pets'

export default function Page() {
  const { pets, isLoading } = useFetchPetsQuery()
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Encontre aqui seu amigo</h1>
      </div>
      {isLoading ? <ListCardLoading length={3} /> : <PetList list={pets || []} canEdit={false} />}
    </div>
  )
}
