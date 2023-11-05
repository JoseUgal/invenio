import { classNames } from '@/design-system/shared/classNames'
import { type HomeNavbarLink } from './home-navbar-items'
import Link from 'next/link'

type HomeNavbarItemProps = HomeNavbarLink & {
  isActive?: boolean
}

const HomeNavbarItem = ({ label, href, isActive }: HomeNavbarItemProps) => {
  return (
    <Link
      key={label}
      href={href}
      className={classNames('py-3 w-max', {
        'border-b-2 border-primary': isActive
      })}
    >
      {label}
    </Link>
  )
}

HomeNavbarItem.displayName = 'HomeNavbarItem'

export { HomeNavbarItem }
