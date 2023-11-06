import { HomeNavbar } from '@/sections/home'

export default function BackofficeApplicationHomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  )
}
