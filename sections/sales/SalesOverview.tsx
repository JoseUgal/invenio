import { Typography } from '@/design-system/atoms/typography'
import { SaleActivityItem } from './SaleActivityItem'
import SALES_ACTIVITY from './data/sales-activity'

const SalesOverview = () => {
  return (
    <div className="w-full space-y-4">
      <Typography as="h2" variant="h3">
        Sales Activity
      </Typography>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {SALES_ACTIVITY.map(({ label, number, unit }) => (
          <SaleActivityItem
            key={label}
            label={label}
            number={number}
            unit={unit}
          />
        ))}
      </div>
    </div>
  )
}

SalesOverview.displayName = 'SalesOverview'

export { SalesOverview }
