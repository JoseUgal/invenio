import { Header, Sidebar } from '@/sections/layouts'

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
