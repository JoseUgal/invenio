import { HomeNavbar } from '@/sections/layouts/home-navbar'

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
