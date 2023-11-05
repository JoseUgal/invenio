import { Button } from '@/design-system/atoms/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/design-system/atoms/card'

const SubscriptionCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Your Premium plan&apos;s trial expires in{' '}
          <span className="text-destructive font-semibold">13 days</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button variant={'outline'} className="w-full">
            Change Plan
          </Button>
          <Button variant={'default'} className="w-full">
            Upgrade
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

SubscriptionCard.displayName = 'SubscriptionCard'

export { SubscriptionCard }
