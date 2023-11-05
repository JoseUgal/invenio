'use client'

import {
  Home,
  Package2,
  BadgeDollarSign,
  ShoppingBag,
  Cable,
  BarChart,
  FolderOpen
} from 'lucide-react'
import { SidebarNavItem } from './sidebar-nav-item'
import { usePathname } from 'next/navigation'

const NAVIGATION_OPTIONS = [
  {
    href: '/application/home',
    label: 'Home',
    icon: Home
  },
  {
    href: '/application/inventory',
    label: 'Inventory',
    icon: Package2
  },
  {
    href: '/application/sales',
    label: 'Sales',
    icon: BadgeDollarSign
  },
  {
    href: '/application/purchases',
    label: 'Purchases',
    icon: ShoppingBag
  },
  {
    href: '/application/integrations',
    label: 'Integrations',
    icon: Cable
  },
  {
    href: '/application/reports',
    label: 'Reports',
    icon: BarChart
  },
  {
    href: '/application/documents',
    label: 'Documents',
    icon: FolderOpen
  }
]

export type SidebarNavigationItem = (typeof NAVIGATION_OPTIONS)[number]

const SidebarNav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-2 mt-2">
      {NAVIGATION_OPTIONS.map((option) => {
        return (
          <SidebarNavItem
            key={option.label}
            href={option.href}
            label={option.label}
            icon={option.icon}
            isActive={pathname.includes(option.href)}
          />
        )
      })}
    </nav>
  )
}

SidebarNav.displayName = 'SidebarNav'

export { SidebarNav }
