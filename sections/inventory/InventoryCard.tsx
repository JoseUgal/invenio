import { Button } from '@/design-system/atoms/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/design-system/atoms/card'
import React from 'react'

interface InventoryCardProps {
  title: string
  description: string
  buttonText: string
  children?: React.ReactNode
}

const InventoryCard = ({
  title,
  description,
  children,
  buttonText
}: InventoryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}

InventoryCard.displayName = 'InventoryCard'

export { InventoryCard }
