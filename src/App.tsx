import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/Link'} variant={'link'}>
        Button As Button
      </Button>
      <Button variant={'primary'}>Button as a</Button>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled label={'sdfgsdf'} />
      <Checkbox label={'sdfgsdf'} />
      <Checkbox checked disabled />
    </div>
  )
}
