import { useArticle } from '@/hooks/use-article'
import { ArticleCard } from '../article-card'
import ErrorDisplay from '../error-display'
import NoResultsFound from '../no-results-found'
import { ArticlesSkeleton } from '../skeletons/articles'

interface ArticlesContainerProps {
  startDate: Date | undefined
  endDate: Date | undefined
}

export const ArticlesContainer = ({ startDate, endDate }: ArticlesContainerProps) => {
  const { data, isLoading, isError, error } = useArticle({ queryKey: ['', startDate, endDate] })
  const articles = data?.results || data?.response?.docs

  if (isLoading) {
    return <ArticlesSkeleton />
  }

  if (!articles?.length) {
    return <NoResultsFound />
  }

  if (isError) {
    return <ErrorDisplay error={error} />
  }

  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {articles?.map((article) => <ArticleCard key={article?.uri} article={article} />)}
    </main>
  )
}
