import '@/design-system/index.css'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { classNames } from '@/design-system/shared/classNames'

export const metadata: Metadata = {
  title: 'Gestiona tu inventario con Invenio'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
