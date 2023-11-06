import { OverviewBanner } from '@/sections/banners'
import { InventorySummary } from '@/sections/inventory'
import { SalesOverview } from '@/sections/sales'

export default function BackofficeApplicationOverview () {
  return (
    <>
      <div className="m-6 space-y-6">
        <OverviewBanner />

        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-6">
          {/* Sales Activity */}
          <div className="col-span-2">
            <SalesOverview />
          </div>

          {/* Inventory Summary */}
          <div className="col-span-2 md:col-span-1">
            <InventorySummary />
          </div>
        </div>
      </div>
    </>
  )
}
