import { type VariantProps } from 'class-variance-authority'
import React from 'react'
import { labelVariants } from './variants'
import { classNames } from '@/design-system/shared/classNames'
import * as LabelPrimitive from '@radix-ui/react-label'

const Label = React.forwardRef<
React.ElementRef<typeof LabelPrimitive.Root>,
React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={classNames(labelVariants(), className)}
    {...props}
  />
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
