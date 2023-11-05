import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
)

Card.displayName = 'Card'

export {
  Card
}
