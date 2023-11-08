import { buttonVariants } from '@/design-system/atoms/button'
import { Typography } from '@/design-system/atoms/typography'
import { X } from 'lucide-react'
import Link from 'next/link'

interface FormHeaderProps {
  title: string
  href: string
}

const FormHeader = ({ title, href }: FormHeaderProps) => {
  return (
    <header className="w-full p-4 border-b">
      <div className="flex items-center justify-between">
        <Typography as="h2" variant="h3">
          {title}
        </Typography>

        <Link
          href={href}
          className={buttonVariants({ size: 'icon', variant: 'ghost' })}
        >
          <X />
        </Link>
      </div>
    </header>
  )
}

FormHeader.displayName = 'FormHeader'

export { FormHeader }
