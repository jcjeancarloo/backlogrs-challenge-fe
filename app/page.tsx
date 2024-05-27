import FeaturedPets from '@/components/featured-pets'
import HowItWorks from '@/components/how-it-works'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeaturedPets />
      <HowItWorks />
    </main>
  )
}
