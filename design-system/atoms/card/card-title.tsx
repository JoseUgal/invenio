import { classNames } from '@/design-system/shared/classNames'
import { forwardRef, type HTMLAttributes } from 'react'

const CardTitle = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={classNames(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props} />
))

CardTitle.displayName = 'CardTitle'

export { CardTitle }
