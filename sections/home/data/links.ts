const links = [
  {
    href: '/application/home/overview',
    label: 'Overview'
  },
  {
    href: '/application/home/getting-started',
    label: 'Getting Started'
  },
  {
    href: '/application/home/announcements',
    label: 'Announcements'
  },
  {
    href: '/application/home/recent-updates',
    label: 'Recent Updates'
  }
]

export type HomeNavbarLink = (typeof links)[number]

export default links
