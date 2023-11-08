'use client'

import { AddCategoriesFormHeader } from './AddCategoriesFormHeader'
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

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Category name is too short'
    })
    .max(50, {
      message: 'Category name is too long'
    }),
  description: z.string()
})

type FormSchema = z.infer<typeof formSchema>

const AddCategoriesForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: ''
    }
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

        form.reset()
      }
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <section>
      <AddCategoriesFormHeader
        title="New category"
        href="/application/inventory/categories"
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="sm:col-span-2 space-y-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Category description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              Save category
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}

AddCategoriesForm.displayName = 'AddCategoriesForm'

export { AddCategoriesForm }
