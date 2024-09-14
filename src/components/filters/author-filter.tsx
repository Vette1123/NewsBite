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
import { useArticleAuthor } from '@/hooks/use-author'
import { cn } from '@/lib/utils'
import { getAuthors } from '@/services/author'
import { AuthorResponse } from '@/types/author'
import { useQuery } from '@tanstack/react-query'
import { CommandLoading } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import ErrorDisplay from '../error-display'
import { Label } from '../ui/label'
import { ScrollArea } from '../ui/scroll-area'

export function ArticleAuthorCombobox() {
  const [open, setOpen] = React.useState(false)
  const { setAuthor: setValue, author: value } = useArticleAuthor()
  const { data, error } = useQuery<AuthorResponse>({
    queryKey: ['authors'],
    queryFn: getAuthors,
    refetchOnWindowFocus: false,
  })

  const results = data?.results

  if (!results?.length) return null

  const authors = results
    ?.flatMap(
      (result) =>
        result?.tags?.map((tag) => ({
          name: tag.webTitle,
          id: tag.id,
        })) || []
    )
    .reduce((unique, author) => {
      const key = `${author.name}-${author.id}`
      if (!unique.has(key)) {
        unique.set(key, author)
      }
      return unique
    }, new Map())
    .values()

  const uniqueAuthors = Array.from(authors)

  if (error) {
    return <ErrorDisplay error={error} />
  }

  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="source-combobox" className="w-fit text-sm font-medium">
        Author
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex items-center gap-2">
          <PopoverTrigger asChild>
            <Button
              id="source-combobox"
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {value
                ? uniqueAuthors?.find((author) => author?.name === value)?.name
                : 'Select an author...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          {value ? (
            <Button
              variant="outline"
              onClick={() => {
                setValue('')
              }}
            >
              Reset
            </Button>
          ) : null}
        </div>
        <PopoverContent className="w-auto p-0">
          <Command>
            <CommandLoading />
            <CommandInput placeholder="Search authors..." />
            <CommandList className="overflow-hidden">
              <ScrollArea className="h-[200px]">
                <CommandEmpty>No authors found.</CommandEmpty>
                <CommandGroup>
                  {uniqueAuthors?.map((author) => {
                    if (!author?.name || !author?.id) return null
                    return (
                      <CommandItem
                        key={author?.name}
                        value={author?.name}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === author?.name ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {author?.name}
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
