import Link from 'next/link'

const Guest = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        className=" px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        href="/auth"
      >
        Entrar
      </Link>
      <Link
        className="rounded-md border border-gray-200 bg-rose-600 hover:bg-rose-500 px-4 py-2 text-sm font-medium shadow-sm text-white transition"
        href="/signup"
      >
        Criar conta
      </Link>
    </div>
  )
}

export default Guest
