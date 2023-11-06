'use client'

import { usePathname } from 'next/navigation'
import { HomeNavbarItem } from './HomeNavbarItem'
import NAVBAR_LINKS from './data/links'

const HomeNavbarItems = () => {
  const pathname = usePathname()
  return (
    <nav className="sticky flex mt-3.5 space-x-4 flex-nowrap">
      {NAVBAR_LINKS.map(({ href, label }) => (
        <HomeNavbarItem
          key={label}
          href={href}
          label={label}
          isActive={pathname === href}
        />
      ))}
    </nav>
  )
}

HomeNavbarItems.displayName = 'HomeNavbarItems'

export { HomeNavbarItems }
