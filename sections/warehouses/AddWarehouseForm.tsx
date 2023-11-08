'use client'

import { Input } from '@/design-system/atoms/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/design-system/molecules/form'
import { Button } from '@/design-system/atoms/button'
import { Textarea } from '@/design-system/atoms/textarea'
import { useState } from 'react'
import { FormHeader } from '@/design-system/molecules/form-header'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/design-system/atoms/select'

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Warehouse name is too short'
    })
    .max(50, {
      message: 'Warehouse name is too long'
    }),
  location: z.string(),
  type: z.enum(['main', 'branch']),
  description: z.string()
})

type FormSchema = z.infer<typeof formSchema>

const AddWarehouseForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })

  const handleSubmit = async (values: FormSchema) => {
    setLoading(true)
    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (response.ok) {
        const data = await response.json()

        console.log({ data })

        form.reset()
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <section>
      <FormHeader
        title="New Warehouse"
        href="/application/inventory/categories"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type warehouse name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a warehouse type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="main">Main</SelectItem>
                      <SelectItem value="branch">Branch</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="sm:col-span-2 space-y-2">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Type warehouse location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="sm:col-span-2 space-y-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Warehouse description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            Save Warehouse
          </Button>
        </form>
      </Form>
    </section>
  )
}

AddWarehouseForm.displayName = 'AddWarehouseForm'

export { AddWarehouseForm }
