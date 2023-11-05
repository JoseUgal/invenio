'use client'

import { usePathname } from 'next/navigation'
import { HomeNavbarItem } from './home-navbar-item'

const NAVBAR_LINKS = [
  {
    href: '/application/home/overview',
    label: 'Overview'
  },
  {
    href: '/application/home/getting-started',
    label: 'Getting Started'
  },
  {
    href: '/application/home/announcements',
    label: 'Announcements'
  },
  {
    href: '/application/home/recent-updates',
    label: 'Recent Updates'
  }
]

export type HomeNavbarLink = (typeof NAVBAR_LINKS)[number]

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
