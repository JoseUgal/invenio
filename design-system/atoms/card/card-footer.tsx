import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('flex items-center p-6 pt-0', className)}
      {...props} />
  )
)

CardFooter.displayName = 'CardFooter'

export { CardFooter }
