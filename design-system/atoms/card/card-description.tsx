import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const CardDescription = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={classNames('text-sm text-muted-foreground', className)}
    {...props} />
))

CardDescription.displayName = 'CardDescription'

export { CardDescription }
