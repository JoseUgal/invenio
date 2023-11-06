import { Typography } from '@/design-system/atoms/typography'
import { Building2 } from 'lucide-react'
import { HomeNavbarItems } from './HomeNavbarItems'

const HomeNavbar = () => {
  return (
    <div className="h-32 p-4 border-b">
      <div className="flex space-x-4">
        <div className="flex w-12 h-12 border rounded-lg justify-center items-center bg-background text-foreground">
          <Building2 className="w-4 h-4 opacity-40" />
        </div>
        <div className="flex flex-col">
          <Typography className="font-semibold">Hello, JOSE UGAL</Typography>
          <Typography variant="muted">Administrator</Typography>
        </div>
      </div>
      <HomeNavbarItems />
    </div>
  )
}

HomeNavbar.displayName = 'HomeNavbar'

export { HomeNavbar }
