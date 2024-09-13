import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ArticlesSkeleton() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {[...Array(8)].map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="relative pb-0">
              <Skeleton className="absolute left-4 top-4 h-6 w-20" />
              <Skeleton className="h-64 w-full rounded-t-lg" />
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-24" />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-10 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
