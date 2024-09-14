'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useArticleCategory } from '@/hooks/use-category'
import { NYT_SECTIONS, NYTSection } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import { Label } from '../ui/label'
import { ScrollArea } from '../ui/scroll-area'

export function NYTSectionCombobox() {
  const [open, setOpen] = React.useState(false)
  const { category, setCategory } = useArticleCategory()

  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="nyt-section-combobox" className="w-fit text-sm font-medium">
        Category
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="nyt-section-combobox"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Select NYT section...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Command>
            <CommandInput placeholder="Search NYT section..." />
            <CommandList className="overflow-hidden">
              <ScrollArea className="h-[200px]">
                <CommandEmpty>No section found.</CommandEmpty>
                <CommandGroup>
                  {NYT_SECTIONS.map((section) => (
                    <CommandItem
                      key={section}
                      value={section}
                      onSelect={(currentValue) => {
                        setCategory(currentValue === category ? '' : (currentValue as NYTSection))
                        setOpen(false)
                      }}
                    >
                      <Check className={cn('mr-2 h-4 w-4', category === section ? 'opacity-100' : 'opacity-0')} />
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
