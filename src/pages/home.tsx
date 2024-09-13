import { ArticlesContainer } from '@/components/containers/articles-container'
import { ArticlesSkeleton } from '@/components/skeletons/articles'
import { Suspense } from 'react'

export const HomePage = () => {
  return (
    <Suspense fallback={<ArticlesSkeleton />}>
      <ArticlesContainer />
    </Suspense>
  )
}
