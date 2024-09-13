import { ArticleCard } from '@/components/article-card'

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  )
}
