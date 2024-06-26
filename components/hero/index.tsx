import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full md:py-0 py-8 bg-orange-100">
      <div className="container px-4 md:px-24">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center md:text-left">
                Encontre seu novo melhor amigo
              </h1>
              <p className="max-w-[600px] text-gray-500 text-center md:text-xl py-2">
                Descubra seu novo companheiro peludo entre nossos pets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-[500px]">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md  bg-rose-600 hover:bg-rose-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="/find"
                id="cta-hero"
              >
                Adotar um pet
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md  bg-white hover:bg-gray-200 px-8 text-sm font-medium  shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="/my-pets"
                id="cta-set-adoption"
              >
                Colocar para adoção
              </Link>
            </div>
          </div>
          <Image className="rounded-md" alt="Hero" height="80" src="/hero.png" width="550" />
        </div>
      </div>
    </section>
  )
}
