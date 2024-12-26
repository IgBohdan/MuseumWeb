import Link from 'next/link'
import { Home, Package, Layers, FileText, Users, Settings, BarChart2, Backpack, MoveLeft } from 'lucide-react'

const menuItems = [
  { name: 'Головна', icon: Home, href: '/admin' },
  { name: 'Експонати', icon: Package, href: '/admin/exhibits' },
  { name: 'Категорії', icon: Layers, href: '/admin/categories' },
  { name: 'Новини', icon: FileText, href: '/admin/news' },
  { name: 'Користувачі', icon: Users, href: '/admin/users' },
  { name: 'Статистика', icon: BarChart2, href: '/admin/statistics' },
  { name: 'Налаштування', icon: Settings, href: '/admin/settings' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <Link href='/' className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
        <MoveLeft />
        back
      </Link>
      <h1 className="text-2xl font-bold mb-8">Адмін-панель</h1>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="flex items-center py-2 px-4 hover:bg-gray-700 rounded transition-colors">
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

