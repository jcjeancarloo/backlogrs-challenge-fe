import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center md:text-left">
                Encontre seu novo melhor amigo
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl py-2">
                Descubra seu novo companheiro peludo entre nossos pets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-[500px]">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Ver Pets em Destaque
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="/find"
              >
                Adotar um Pet
              </Link>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom hidden md:block md:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/next.svg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
