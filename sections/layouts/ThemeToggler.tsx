'use client'

import { Button } from '@/design-system/atoms/button'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/design-system/atoms/tooltip'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const handleClickButton = () => {
    const newTheme = resolvedTheme === 'ligth' ? 'dark' : 'ligth'

    setTheme(newTheme)
  }

  const Icon = resolvedTheme === 'ligth' ? Moon : Sun

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button size={'icon'} variant={'ghost'} onClick={handleClickButton}>
          <Icon className="w-4 h-4" />
        </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change Theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

ThemeToggler.displayName = 'ThemeToggler'

export { ThemeToggler }
