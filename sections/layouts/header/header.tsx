import { Button } from '@/design-system/atoms/button'
import {
  Bell,
  ChevronDown,
  History,
  LayoutGrid,
  Plus,
  Settings,
  User2
} from 'lucide-react'
import { HeaderSearchbar } from './header-searchbar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/design-system/atoms/tooltip'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/design-system/atoms/avatar'

const Header = () => {
  return (
    <header className="border-b h-14 flex justify-between items-center px-4">
      <div className="flex gap-4">
        {/* Recent activies */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={'icon'} variant={'ghost'}>
                <History className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Recent Activites</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Search */}
        <HeaderSearchbar />
      </div>
      <div className="flex items-center">
        {/* Add */}
        <div className="pr-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'default'} className="h-6 w-6">
                  <Plus className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick Create</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="ml-2 flex px-2 border-x">
          {/* Users */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'ghost'}>
                  <User2 className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refer and Earn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Notifications */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'ghost'}>
                  <Bell className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Settings */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'ghost'}>
                  <Settings className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="ml-2 flex items-center gap-2">
          {/* User */}
          <Button
            variant={'ghost'}
            size={'sm'}
            className="flex justify-between gap-2"
          >
            <span>Codefastly</span>
            <ChevronDown className="h-3 w-3" />
            <Avatar className="w-6 h-6">
              <AvatarImage src="/avatars/avatar01.png" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
          </Button>

          {/* Extensions */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={'icon'} variant={'ghost'}>
                  <LayoutGrid className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Integrations</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}

Header.displayName = 'Header'

export { Header }
