import Link from 'next/link'
import Signup from '../signup'

const Guest = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/auth">Entrar</Link>
      <Signup />
    </div>
  )
}

export default Guest
