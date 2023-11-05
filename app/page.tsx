import { Button } from '@/design-system/atoms/button'
import { Typography } from '@/design-system/atoms/typography'

export default function Home () {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Typography as='h3'>
        Invenio
      </Typography>
      <Button>
        Esto es el color de codefastly
      </Button>
    </div>
  )
}
