import { forwardRef } from 'react'
import { type ButtonProps } from './types'
import { buttonVariants } from './variants'
import { Slot } from '@radix-ui/react-slot'
import { classNames } from '@/design-system/shared/classNames'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
