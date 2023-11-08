import { InventoryCard, InventoryFixedHeader } from '@/sections/inventory'
import Image from 'next/image'

export default function BackofficeApplicationInventoryLayout () {
  return (
    <div>
      <InventoryFixedHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <InventoryCard
          title="Item groups"
          description="Create multiple variants of the same item using Item Groups"
          buttonText="New Item Group"
        >
          <Image
            src={'/inventory/inventory01.svg'}
            width={100}
            height={100}
            alt=""
          />
        </InventoryCard>
        <InventoryCard
          title="Items"
          description="Create standalone items and services that you buy and sell"
          buttonText="New Item"
        >
          <Image
            src={'/inventory/inventory02.svg'}
            width={100}
            height={100}
            alt=""
          />
        </InventoryCard>
        <InventoryCard
          title="Composite Items"
          description="Bundle different items together and sell them as kits"
          buttonText="New Composite Item"
        >
          <Image
            src={'/inventory/inventory03.svg'}
            width={100}
            height={100}
            alt=""
          />
        </InventoryCard>
        <InventoryCard
          title="Price Lists"
          description="Tweak your item prices for specific contacts or transactions"
          buttonText="Enable Now"
        >
          <Image
            src={'/inventory/inventory04.svg'}
            width={100}
            height={100}
            alt=""
          />
        </InventoryCard>
      </div>
    </div>
  )
}
