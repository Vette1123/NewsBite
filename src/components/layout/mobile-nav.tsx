import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/navbar'
import * as React from 'react'
import { Link } from 'react-router-dom'

interface MobileNavProps {
  items?: NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="inset-y-0 flex h-auto w-[350px] flex-col p-0">
        <div className="px-7 py-4">
          <SheetClose asChild>
            <Link aria-label="Home" to="/" className="flex w-fit items-center">
              <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
          </SheetClose>
        </div>

        <div className="my-4 flex flex-1 flex-col gap-4 px-9 pb-2">
          {items?.map((item, index) => (
            <div className="border-b-2 last:border-b-0" key={item.title}>
              <SheetClose asChild>
                <MobileLink key={index} href={item.href!} disabled={item.disabled}>
                  {item.title}
                </MobileLink>
              </SheetClose>
            </div>
          ))}
        </div>
        <div className="px-9 pb-10">
          <Link
            to={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'default',
                className: 'w-full',
              })
            )}
          >
            Visit my portfolio
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
}

function MobileLink({ children, href, disabled }: MobileLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        'w-fit text-base font-medium text-foreground/70 transition-colors hover:text-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
    >
      {children}
    </Link>
  )
}
