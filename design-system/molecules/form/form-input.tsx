'use client'

import { type Control } from 'react-hook-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '.'
import { Input } from '@/design-system/atoms/input'
import { type InputHTMLAttributes } from 'react'

interface ControlProps {
  control: Control
  name: string
  className?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement>

type FormInputProps = ControlProps & InputProps & {
  label?: string
  description?: string
  disableMessages?: boolean
}

const FormInput = ({
  control,
  name,
  className,
  label,
  type = 'text',
  description,
  disableMessages,
  ...restInputProps
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input type={type} {...restInputProps} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {!disableMessages && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

FormInput.displayName = 'FormInput'

export { FormInput }
