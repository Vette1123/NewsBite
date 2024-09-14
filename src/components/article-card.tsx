'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import { UnifiedArticle } from '@/types/nyt-article'
import { CalendarIcon, ClockIcon, NewspaperIcon } from 'lucide-react'

interface ArticleCardProps {
  article: UnifiedArticle
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex w-full max-w-3xl flex-col">
      <div className="flex-grow overflow-auto">
        <CardHeader className="relative pb-0">
          <div className="absolute left-4 top-4 z-10">
            <Badge variant="secondary" className="bg-primary capitalize text-primary-foreground">
              {article?.section}
            </Badge>
          </div>
          {article?.multimedia && article?.multimedia?.length > 0 ? (
            <div className="h-64 w-full overflow-hidden rounded-t-lg">
              <img
                src={article?.multimedia[0]?.url}
                alt={article?.multimedia[0]?.caption}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-64 w-full overflow-hidden rounded-t-lg bg-gray-200">
              <div className="flex h-full w-full items-center justify-center">
                <NewspaperIcon className="h-12 w-12 text-gray-500" />
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="mb-2 text-2xl font-bold">{article?.title}</CardTitle>
          <p className="mb-4 text-muted-foreground">{article?.abstract}</p>
          <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{formatDate(article?.published_date)}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-1 h-4 w-4" />
              <span>{article?.kicker}</span>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {article?.des_facet?.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter className="mt-auto flex items-center justify-between border-t p-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
            <AvatarFallback>
              <NewspaperIcon className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{article?.byline}</span>
        </div>
        <Button variant="outline" onClick={() => window.open(article?.url, '_blank')}>
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
