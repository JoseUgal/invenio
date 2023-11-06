import { Button } from '@/design-system/atoms/button'
import { Typography } from '@/design-system/atoms/typography'
import { ChevronLeft, Package } from 'lucide-react'
import { SidebarNav } from './SidebarNav'
import { SubscriptionCard } from '@/sections/subscriptions/subscription-card'

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen border-r flex flex-col justify-between">
      {/* Top Part */}
      <div className="flex flex-col">
        {/* Logo */}
        <div className="h-14 px-4 border-b flex gap-2 items-center justify-start text-primary-foreground bg-primary">
          <Package />
          <Typography as="p" variant="h3" className="font-semibold">
            Invenio
          </Typography>
        </div>

        {/* Links */}
        <SidebarNav />
      </div>

      {/* Bottom Part */}
      <div className="flex flex-col gap-4 justify-center p-4">
        {/* Subscription Card */}
        <SubscriptionCard />

        {/* Footer Icon */}
        <Button variant={'outline'} className="w-full">
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
    </aside>
  )
}

Sidebar.displayName = 'Sidebar'

export { Sidebar }
