import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiHome5Line, RiSearch2Line, RiBookmarkLine, RiUser3Line, RiSettings5Line, RiEyeLine } from 'react-icons/ri'

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { icon: RiHome5Line, href: '/', label: 'خانه' },
    { icon: RiSearch2Line, href: '/mineral-list', label: 'جستجو' },
    { icon: RiEyeLine, href: '/identify', label: 'شناسایی کانی' },
    { icon: RiBookmarkLine, href: '/favorites', label: 'علاقه‌مندی‌ها' },
    { icon: RiUser3Line, href: '/profile', label: 'پروفایل' },
  ]

  return (
    <nav className="flex gap-2 border-t border-[#312348] bg-[#231933] px-4 pb-3 pt-2 fixed bottom-0 left-0 right-0">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-1 flex-col items-center justify-end gap-1">
          <item.icon
            size={24}
            className={pathname === item.href ? 'text-white' : 'text-[#a692c9]'}
          />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

