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
import { useState } from 'react'
import { FormHeader } from '@/design-system/molecules/form-header'

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Unit name is too short'
    })
    .max(50, {
      message: 'Unit name is too long'
    }),
  abbreviation: z
    .string()
    .min(1, {
      message: 'Unit abbreviation is too short'
    })
    .max(3, {
      message: 'Unit abbreviation name is too long'
    })
})

type FormSchema = z.infer<typeof formSchema>

const AddUnitForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      abbreviation: ''
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
      <FormHeader title="New Unit" href="/application/inventory/units" />

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
                    <Input placeholder="Type unit name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="abbreviation"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Abbreviation</FormLabel>
                  <FormControl>
                    <Input placeholder="Type unit abbreviation" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              Save unit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}

AddUnitForm.displayName = 'AddUnitForm'

export { AddUnitForm }
