import { Typography } from '@/design-system/atoms/typography'
import { InventorySummaryItem } from './InventorySummaryItem'
import INVENTORY_SUMMARY from './data/inventory-summary'

const InventorySummary = () => {
  return (
    <div className="w-full space-y-4">
      <Typography as="h2" variant="h3">
        Inventory Summary
      </Typography>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {INVENTORY_SUMMARY.map(({ label, number }) => (
          <InventorySummaryItem key={label} label={label} number={number} />
        ))}
      </div>
    </div>
  )
}

InventorySummary.displayName = 'InventorySummary'

export { InventorySummary }
