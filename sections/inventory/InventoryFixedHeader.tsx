import { Button } from '@/design-system/atoms/button'
import {
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus
} from 'lucide-react'

const InventoryFixedHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Button variant={'ghost'}>
        <span className="text-2xl">All items</span>
      </Button>

      <div className="flex items-center gap-4">
        {/* New */}
        <Button className="space-x-2">
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Button>

        {/* Layout */}
        <div className="flex border rounded-lg">
          <Button variant={'ghost'} size={'icon'} className="rounded-e-none">
            <List className="w-4 h-4" />
          </Button>
          <Button variant={'ghost'} size={'icon'} className="rounded-s-none">
            <LayoutGrid className="w-4 h-4" />
          </Button>
        </div>

        {/* More */}
        <Button variant={'outline'} size={'icon'}>
          <MoreHorizontal className="w-4 h-4" />
        </Button>

        {/* Help */}
        <Button variant={'secondary'} size={'icon'}>
          <HelpCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

InventoryFixedHeader.displayName = 'InventoryFixedHeader'

export { InventoryFixedHeader }
