'use client'

import { Button } from '@/design-system/atoms/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/design-system/atoms/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormInput
} from '@/design-system/molecules/form'
import { FormHeader } from '@/design-system/molecules/form-header'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Control, useForm } from 'react-hook-form'
import { z } from 'zod'

const brands = [
  { id: '1', name: 'Brand #1' },
  { id: '2', name: 'Brand #2' }
]
const warehouses = [
  { id: '1', name: 'Warehouse #1' },
  { id: '2', name: 'Warehouse #2' }
]
const categories = [
  { id: '1', name: 'Category #1' },
  { id: '2', name: 'Category #2' }
]
const units = [
  { id: '1', abbreviation: 'Kg' },
  { id: '2', abbreviation: 'g' }
]

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Item name is required'
    })
    .min(2, {
      message: 'Item name too short'
    })
    .max(50, {
      message: 'Item name too long'
    }),
  description: z.string(),
  categoryId: z.string({
    required_error: 'Item category is required'
  }),
  sku: z.string(),
  barcode: z.string(),
  quantity: z.number({
    required_error: 'Item quantity is required'
  }),
  brandId: z.string({
    required_error: 'Item brand is required'
  }),
  unitId: z.string({
    required_error: 'Item unit is required'
  }),
  unitPrice: z.number().default(0),
  costPrice: z.number().default(0),
  reOrderPoint: z.number({
    required_error: 'Item re-order point is required'
  }),
  warehouseId: z.string({
    required_error: 'Item warehouse is required'
  }),
  images: z.any(),
  weight: z.number(),
  taxRate: z.number(),
  notes: z.string()
})

type FormSchema = z.infer<typeof formSchema>

const InventoryAddItemForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })

  const handleSubmit = (values: FormSchema) => {}

  return (
    <section>
      <FormHeader title="Add New Item" href="/application/inventory/items" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 p-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {/* <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormInput
              control={form.control as unknown as Control}
              name="name"
              label="Name"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="description"
              label="Desciption"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="categoryId"
              label="Category"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="unitId"
              label="Unit"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="sku"
              label="SKU"
            />
            <FormInput
              control={form.control as unknown as Control}
              name="barcode"
              label="Barcode"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="quantity"
              label="Quantity"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="brandId"
              label="Brand"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="unitPrice"
              label="Unit Price"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="costPrice"
              label="Cost Price"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="reOrderPoint"
              label="Re-order Points"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="weight"
              label="Weight"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="taxRate"
              label="Tax Rate"
              type="number"
            />

            <FormInput
              control={form.control as unknown as Control}
              name="notes"
              label="Notes"
            />

            <FormField
              control={form.control}
              name="warehouseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a warehouse" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {warehouses.map(({ id, name }) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button>Save Item</Button>
        </form>
      </Form>
    </section>
  )
}

InventoryAddItemForm.displayName = 'InventoryAddItemForm'

export { InventoryAddItemForm }
