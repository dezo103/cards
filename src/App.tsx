import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/Link'} variant={'link'}>
        Button As Button
      </Button>
      <Button variant={'secondary'}>Button as a</Button>
    </div>
  )
}
