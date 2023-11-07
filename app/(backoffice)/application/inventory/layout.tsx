import { InventoryFixedHeader } from '@/sections/inventory'

export default function BackofficeApplicationInventoryLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <InventoryFixedHeader />
      {children}
    </div>
  )
}
