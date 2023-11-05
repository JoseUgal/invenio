import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={classNames('p-6 pt-0', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

export { CardContent }
