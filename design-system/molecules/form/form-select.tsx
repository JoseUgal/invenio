import { type FieldValues, type Control } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '.'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/design-system/atoms/select'

interface FormSelectProps {
  control: Control<FieldValues>
  name: string
  className?: string
  placeholder?: string
  label?: string
  disableMessages?: boolean
  children?: JSX.Element[]
}

interface FormSelectItemProps {
  label: string
  value: any
}

const FormSelectItem = ({ label, value }: FormSelectItemProps) => {
  return <SelectItem value={value}>{label}</SelectItem>
}

FormSelectItem.displayName = 'FormSelectItem'

const FormSelectWrapper = ({
  control,
  name,
  label,
  className,
  placeholder,
  disableMessages = false,
  children
}: FormSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{children}</SelectContent>
          </Select>
          {!disableMessages && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

FormSelectWrapper.displayName = 'FormSelectWrapper'

const FormSelect = Object.assign(FormSelectWrapper, {
  Item: FormSelectItem
})

export { FormSelect }
