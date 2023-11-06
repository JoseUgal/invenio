import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/design-system/atoms/card'

import { CheckCircle2, type LucideIcon } from 'lucide-react'

interface SalesActivityItemProps {
  label: string
  number: number
  unit: string
  icon?: LucideIcon
}

const SaleActivityItem = ({
  label,
  number,
  unit,
  icon: Icon = CheckCircle2
}: SalesActivityItemProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">
          {label}
        </CardTitle>
        <Icon className="w-4 h-4" />
      </CardHeader>
      <CardContent>
        <div className="space-x-1">
          <span className="text-3xl font-bold">
            {number}
          </span>
          <span className="text-xs text-muted-foreground">
            {unit}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

SaleActivityItem.displayName = 'SaleActivityItem'

export { SaleActivityItem }
