interface InventorySummaryItemProps {
  label: string
  number: number
}

const InventorySummaryItem = ({ label, number }: InventorySummaryItemProps) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-row items-center justify-between">
        <span className="text-md font-medium">
          {label}
        </span>
        <span className="text-3xl font-bold">
          {number}
        </span>
      </div>
    </div>
  )
}

InventorySummaryItem.displayName = 'InventorySummaryItem'

export { InventorySummaryItem }
