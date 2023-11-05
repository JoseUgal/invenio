import { buttonVariants } from '@/design-system/atoms/button'
import { classNames } from '@/design-system/shared/classNames'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { type SidebarNavigationItem } from './sidebar-nav'

type SidebarNavItemProps = SidebarNavigationItem & {
  isActive?: boolean
}

const SidebarNavItem = ({
  href,
  label,
  icon: Icon,
  isActive = false
}: SidebarNavItemProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        buttonVariants({ variant: 'ghost' }),
        'w-full flex justify-between',
        'relative rounded-none'
      )}
    >
      <div className={classNames(
        'flex items-center gap-4',
        { 'text-muted-foreground': !isActive }
      )}>
        <Icon className={classNames(
          'h-4 w-4',
          { 'text-primary': isActive }
        )} />
        <span>{label}</span>
      </div>
      {isActive && (
        <>
          <ChevronRight size={15} className="text-primary" />
          <div className="absolute w-2 h-[60%] bg-primary rounded -translate-x-5" />
        </>
      )}
    </Link>
  )
}

SidebarNavItem.displayName = 'SidebarNavItem'

export { SidebarNavItem }
