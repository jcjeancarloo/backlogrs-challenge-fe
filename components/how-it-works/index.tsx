/* eslint-disable react/no-unescaped-entities */
import { ClipboardCheckIcon, HeartIcon, SearchIcon } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Como funciona
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Siga estas etapas simples para adotar seu novo amigo peludo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
            <div className="flex flex-col items-center gap-4">
              <SearchIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">1. Encontre</h3>
              <p className="text-gray-500">
                Navegue pelos nossos pets e encontre seu novo companheiro.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <HeartIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">2. Selecione</h3>
              <p className="text-gray-500">
                Escolha o pet que você deseja adotar e clique no botão "Adotar".
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ClipboardCheckIcon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">3. Adote</h3>
              <p className="text-gray-500">
                Confira as informações e confirme a adoção e ganhe um novo companheiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
