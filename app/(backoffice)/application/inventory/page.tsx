import { InventoryCard, InventoryFixedHeader } from '@/sections/inventory'

export default function BackofficeApplicationInventoryLayout () {
  return (
    <div>
      <InventoryFixedHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <InventoryCard
          title="Item groups"
          description="Create multiple variants of the same item using Item Groups"
          buttonText="New Item Group"
        />
        <InventoryCard
          title="Items"
          description="Create standalone items and services that you buy and sell"
          buttonText="New Item"
        />
        <InventoryCard
          title="Composite Items"
          description="Bundle different items together and sell them as kits"
          buttonText="New Composite Item"
        />
        <InventoryCard
          title="Price Lists"
          description="Tweak your item prices for specific contacts or transactions"
          buttonText="Enable Now"
        />
      </div>
    </div>
  )
}
