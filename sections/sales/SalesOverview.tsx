import { Typography } from '@/design-system/atoms/typography'
import { SaleActivityItem } from './SaleActivityItem'
import SALES_ACTIVITY from './data/sales-activity'
import INVENTORY_SUMMARY from './data/inventory-summary'
import { InventorySummaryItem } from './InventorySummaryItem'

const SalesOverview = () => {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-6">
      {/* Sales Activity */}
      <div className="col-span-2 space-y-4">
        <Typography as="h2" variant="h3">
          Sales Activity
        </Typography>
        <div className="grid grid-cols-4 gap-4">
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

      {/* Inventory Summary */}
      <div className="col-span-1 space-y-4">
        <Typography as="h2" variant="h3">
          Inventory Summary
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {INVENTORY_SUMMARY.map(({ label, number }) => (
            <InventorySummaryItem key={label} label={label} number={number} />
          ))}
        </div>
      </div>
    </div>
  )
}

SalesOverview.displayName = 'SalesOverview'

export { SalesOverview }
