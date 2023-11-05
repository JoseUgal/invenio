import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('flex flex-col space-y-1.5 p-6', className)}
      {...props} />
  )
)

CardHeader.displayName = 'CardHeader'

export { CardHeader }
