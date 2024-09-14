import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useArticleSource } from '@/hooks/use-source'
import { cn } from '@/lib/utils'
import { getSources } from '@/services/source'
import { ArticleSourceResponse } from '@/types/source'
import { useQuery } from '@tanstack/react-query'
import { CommandLoading } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import ErrorDisplay from '../error-display'
import { Label } from '../ui/label'
import { ScrollArea } from '../ui/scroll-area'

export function ArticleSourceCombobox() {
  const [open, setOpen] = React.useState(false)
  const { setSource: setValue, source: value } = useArticleSource()
  const { data, error } = useQuery<ArticleSourceResponse>({
    queryKey: ['sources'],
    queryFn: getSources,
    refetchOnWindowFocus: false,
  })

  if (error) {
    return <ErrorDisplay error={error} />
  }

  const sources = data?.sources

  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="source-combobox" className="w-fit text-sm font-medium">
        Source
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="source-combobox"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? sources?.find((source) => source?.name === value)?.name
              : 'Select a source...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Command>
            <CommandLoading />
            <CommandInput placeholder="Search sources..." />
            <CommandList className="overflow-hidden">
              <ScrollArea className="h-[200px]">
                <CommandEmpty>No source found.</CommandEmpty>
                <CommandGroup>
                  {sources?.map((source) => {
                    if (!source?.name || !source?.id) return null
                    return (
                      <CommandItem
                        key={source?.name}
                        value={source?.name}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === source?.name ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {source?.name}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
