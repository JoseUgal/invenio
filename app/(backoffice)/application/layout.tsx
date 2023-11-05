import { Header } from '@/sections/layouts/header'
import { Sidebar } from '@/sections/layouts/sidebar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full min-h-screen">
        <Header />
        {children}
      </main>
    </div>
  )
}
