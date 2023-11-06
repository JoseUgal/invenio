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
import { SidebarNavItem } from './SidebarNavItem'
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
    icon: Package2,
    childrens: [
      {
        href: '/application/inventory/items',
        label: 'Items'
      },
      {
        href: '/application/inventory/item-groups',
        label: 'Item Groups'
      },
      {
        href: '/application/inventory/adjustments',
        label: 'Inventory Adjustments'
      }
    ]
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
            childrens={option.childrens}
            pathname={pathname}
          />
        )
      })}
    </nav>
  )
}

SidebarNav.displayName = 'SidebarNav'

export { SidebarNav }
