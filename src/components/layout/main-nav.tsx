import { siteConfig } from '@/configs/site'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/navbar'
import { NewspaperIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 md:gap-10 lg:flex">
      <Link to="/" className="flex items-center space-x-2">
        <NewspaperIcon className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
