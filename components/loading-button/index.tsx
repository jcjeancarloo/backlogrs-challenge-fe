import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type LoadingButtonProps = {
  isLoading: boolean
  text: string
}
export default function LoadingButton({ isLoading, text }: LoadingButtonProps) {
  return (
    <Button className="w-full" type="submit" disabled={isLoading} id="submit-btn">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span>Carregando</span>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  )
}
