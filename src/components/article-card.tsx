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
    section: 'business',
    subsection: '',
    title: 'G.M. and Hyundai Plan to Work Together on New Vehicles',
    abstract:
      'General Motors and the South Korean automaker say they will collaborate on new vehicles, buying parts and clean energy technologies.',
    url: 'https://www.nytimes.com/2024/09/12/business/general-motors-hyundai-partnership.html',
    uri: 'nyt://article/d787cd34-070f-5105-8bcf-17bda909236a',
    byline: 'By Neal E. Boudette',
    item_type: 'Article',
    updated_date: '2024-09-12T20:56:50-04:00',
    created_date: '2024-09-12T06:00:12-04:00',
    published_date: '2024-09-12T06:00:12-04:00',
    material_type_facet: '',
    kicker: '',
    des_facet: [
      'Automobiles',
      'Alternative and Renewable Energy',
      'Electric and Hybrid Vehicles',
      'Factories and Manufacturing',
      'Supply Chain',
      'Corporations',
      'Batteries',
      'Prices (Fares, Fees and Rates)',
    ],
    org_facet: ['General Motors', 'Hyundai Motor Co', 'Tesla Motors Inc'],
    per_facet: ['Barra, Mary T'],
    geo_facet: ['South Korea'],
    multimedia: [
      {
        url: 'https://static01.nyt.com/images/2024/09/12/multimedia/12gm-hyundai-kjcg/12gm-hyundai-kjcg-superJumbo.jpg',
        format: 'Super Jumbo',
        height: 1421,
        width: 2048,
        type: 'image',
        subtype: 'photo',
        caption:
          'A General Motors assembly plant in Lake Orion, Mich. The automaker will work with Hyundai to develop new vehicles and technologies.',
        copyright: 'Rebecca Cook/Reuters',
      },
      {
        url: 'https://static01.nyt.com/images/2024/09/12/multimedia/12gm-hyundai-kjcg/12gm-hyundai-kjcg-threeByTwoSmallAt2X.jpg',
        format: 'threeByTwoSmallAt2X',
        height: 400,
        width: 600,
        type: 'image',
        subtype: 'photo',
        caption:
          'A General Motors assembly plant in Lake Orion, Mich. The automaker will work with Hyundai to develop new vehicles and technologies.',
        copyright: 'Rebecca Cook/Reuters',
      },
      {
        url: 'https://static01.nyt.com/images/2024/09/12/multimedia/12gm-hyundai-kjcg/12gm-hyundai-kjcg-thumbLarge.jpg',
        format: 'Large Thumbnail',
        height: 150,
        width: 150,
        type: 'image',
        subtype: 'photo',
        caption:
          'A General Motors assembly plant in Lake Orion, Mich. The automaker will work with Hyundai to develop new vehicles and technologies.',
        copyright: 'Rebecca Cook/Reuters',
      },
    ],
    short_url: '',
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="relative pb-0">
        <div className="absolute left-4 top-4 z-10">
          <Badge variant="secondary" className="bg-primary capitalize text-primary-foreground">
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
