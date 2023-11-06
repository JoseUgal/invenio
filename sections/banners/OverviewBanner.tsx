'use client'

import { Button } from '@/design-system/atoms/button'
import { Typography } from '@/design-system/atoms/typography'
import { classNames } from '@/design-system/shared/classNames'
import { useState } from 'react'

const OverviewBanner = () => {
  const [hidden, setHidden] = useState(false)

  const handleClickClose = () => { setHidden(true) }

  return (
    <div
      className={classNames(
        'relative flex flex-wrap justify-between items-center gap-8 py-6 px-8 bg-secondary border rounded',
        { hidden }
      )}
    >
      <div className="max-w-2xl space-y-1">
        <Typography as="h2" variant="h3">
          Start accepting online payments
        </Typography>
        <Typography variant="lead">
          Businesses are moving towards online payments as they&apos;re easy,
          secure and fast. Try them for your business today.
        </Typography>
      </div>
      <div className="space-x-2">
        <Button>Enable</Button>
        <Button variant={'outline'} onClick={handleClickClose}>
          Close
        </Button>
      </div>
    </div>
  )
}

OverviewBanner.displayName = 'DashboardBanner'

export { OverviewBanner }
