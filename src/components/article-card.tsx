'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Result } from '@/types/nyt-article'
import { CalendarIcon, ClockIcon, NewspaperIcon } from 'lucide-react'

export function ArticleCard() {
  // Mock data for demonstration
  const article: Result = {
    section: 'technology',
    subsection: 'personaltech',
    title: 'The Future of AI: Transforming Industries and Daily Life',
    abstract:
      'Artificial Intelligence is rapidly evolving, promising to revolutionize various sectors from healthcare to finance. This article explores the potential impacts and challenges ahead.',
    url: 'https://www.nytimes.com/2023/05/15/technology/ai-future-impacts.html',
    uri: 'nyt://article/1234abcd-5678-90ef-ghij-klmnopqrstuv',
    byline: 'By John Doe',
    item_type: 'Article',
    updated_date: '2023-05-15T09:00:00-04:00',
    created_date: '2023-05-14T18:30:00-04:00',
    published_date: '2023-05-15T06:00:00-04:00',
    material_type_facet: 'News',
    kicker: 'Tech Review',
    des_facet: ['Artificial Intelligence', 'Technology', 'Innovation'],
    org_facet: ['OpenAI', 'Google', 'Microsoft'],
    per_facet: ['Sundar Pichai', 'Sam Altman'],
    geo_facet: ['Silicon Valley', 'San Francisco'],
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2023/05/15/multimedia/15ai-future-1-fklt/15ai-future-1-fklt-superJumbo.jpg',
        format: 'Super Jumbo',
        height: 1365,
        width: 2048,
        type: 'image',
        subtype: 'photo',
        caption: 'AI-powered robots in a modern laboratory setting.',
        copyright: '© 2023 The New York Times',
      },
    ],
    short_url: 'https://nyti.ms/3abcdef',
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="relative pb-0">
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            {article.section}
          </Badge>
        </div>
        {article.multimedia && article.multimedia.length > 0 && (
          <div className="h-64 w-full overflow-hidden rounded-t-lg">
            <img
              src={article.multimedia[0].url}
              alt={article.multimedia[0].caption}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="mb-2 text-2xl font-bold">{article.title}</CardTitle>
        <p className="mb-4 text-muted-foreground">{article.abstract}</p>
        <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <span>{formatDate(article.published_date)}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-1 h-4 w-4" />
            <span>{article.kicker}</span>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {article.des_facet.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
            <AvatarFallback>
              <NewspaperIcon className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{article.byline}</span>
        </div>
        <Button variant="outline" onClick={() => window.open(article.url, '_blank')}>
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
