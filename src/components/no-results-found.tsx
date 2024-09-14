import { SearchX } from 'lucide-react'

export default function NoResultsFound({
  message = 'No results found',
}: {
  message?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-background p-8 text-center shadow-sm">
      <SearchX className="mb-4 h-16 w-16 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold text-foreground">{message}</h2>
      <p className="text-muted-foreground">
        We couldn't find any matching results. Please try a different search or
        filter.
      </p>
    </div>
  )
}
