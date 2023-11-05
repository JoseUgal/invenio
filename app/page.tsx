import { Typography } from '@/design-system/atoms/typography'
import Link from 'next/link'

export default function Home () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Typography as="h3">Invenio</Typography>
      <div className='mt-3 flex flex-col gap-2 text-center'>
        <Link href={'/application/home/overview'}>Overview</Link>
        <Link href={'/application/home/announcements'}>Announcements</Link>
        <Link href={'/application/home/getting-started'}>Getting Started</Link>
        <Link href={'/application/home/recent-updates'}>Recent Updates</Link>
      </div>
    </div>
  )
}
