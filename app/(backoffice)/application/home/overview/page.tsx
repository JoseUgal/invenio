import { OverviewBanner } from '@/sections/banners'
import { SalesOverview } from '@/sections/sales'

export default function BackofficeApplicationOverview () {
  return (
    <>
      <div className='m-6 space-y-6'>
        <OverviewBanner />
        <SalesOverview />
      </div>
    </>
  )
}
