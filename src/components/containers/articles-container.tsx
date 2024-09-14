import { useArticle } from '@/hooks/use-article'
import { useArticleCategory } from '@/hooks/use-category'
import { useArticleSource } from '@/hooks/use-source'
import { ArticleCard } from '../article-card'
import ErrorDisplay from '../error-display'
import NoResultsFound from '../no-results-found'
import { ArticlesSkeleton } from '../skeletons/articles'

interface ArticlesContainerProps {
  startDate: Date | undefined
  endDate: Date | undefined
  keyword: string
}

export const ArticlesContainer = ({
  startDate,
  endDate,
  keyword,
}: ArticlesContainerProps) => {
  const { category } = useArticleCategory()
  const { source } = useArticleSource()
  const { data, isLoading, isError, error } = useArticle({
    queryKeys: [category, keyword, startDate, endDate, source],
  })
  const articles = data?.results

  if (isLoading) {
    return <ArticlesSkeleton />
  }

  if (!articles?.length) {
    return <NoResultsFound />
  }

  if (isError || error) {
    return <ErrorDisplay error={error} />
  }

  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {articles?.map((article) => (
        <ArticleCard key={article?.uri} article={article} />
      ))}
    </main>
  )
}
