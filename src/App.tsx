import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/Link'} variant={'link'}>
        Button As Button
      </Button>
      <Button variant={'primary'}>Button as a</Button>
    </div>
  )
}
