import { Button, buttonVariants } from '@/design-system/atoms/button'
import { classNames } from '@/design-system/shared/classNames'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { type SidebarNavigationItem } from './SidebarNav'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/design-system/atoms/collapsible'

type SidebarNavItemProps = SidebarNavigationItem & {
  pathname: string
}

const SidebarNavItem = ({
  href,
  label,
  icon,
  childrens,
  pathname
}: SidebarNavItemProps) => {
  const isActive = pathname.includes(href)
  const componentClassNames =
    'w-full flex justify-between relative rounded-none'

  if (Array.isArray(childrens) && childrens.length > 0) {
    return (
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant={'ghost'} className={componentClassNames}>
            <SidebarNavItemContent
              label={label}
              isActive={isActive}
              icon={icon}
              renderFlag={false}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {childrens.map((children) => {
            const isActiveChild = pathname === children.href
            return (
              <Link
                key={children.href}
                href={children.href}
                className={classNames(
                  buttonVariants({ variant: 'ghost' }),
                  componentClassNames
                )}
              >
                <SidebarNavItemContent
                  label={children.label}
                  isActive={isActiveChild}
                  icon={undefined}
                  renderFlag={true}
                  renderArrow={false}
                />
              </Link>
            )
          })}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      href={href}
      className={classNames(
        buttonVariants({ variant: 'ghost' }),
        componentClassNames
      )}
    >
      <SidebarNavItemContent label={label} isActive={isActive} icon={icon} />
    </Link>
  )
}

interface SidebarNavItemContentProps {
  label: string
  isActive?: boolean
  renderFlag?: boolean
  renderArrow?: boolean
  icon?: LucideIcon
}

const SidebarNavItemContent = ({
  label,
  isActive = false,
  renderFlag = true,
  renderArrow = true,
  icon: Icon
}: SidebarNavItemContentProps) => {
  return (
    <>
      <div
        className={classNames('flex items-center gap-4', {
          'text-muted-foreground': !isActive
        })}
      >
        {Icon !== undefined && (
          <Icon
            className={classNames('h-4 w-4', { 'text-primary': isActive })}
          />
        )}
        <span>{label}</span>
      </div>
      {isActive && (
        <>
          {renderArrow && <ChevronRight size={15} className="text-primary" />}
          {renderFlag && (
            <div className="absolute w-2 h-[60%] bg-primary rounded -translate-x-5" />
          )}
        </>
      )}
    </>
  )
}

SidebarNavItem.displayName = 'SidebarNavItem'

export { SidebarNavItem }
