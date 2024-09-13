import { getArticles } from '@/services/article'
import { useQuery } from '@tanstack/react-query'

interface UseArticleProps {
  queryKey: any[]
}

export const useArticle = ({ queryKey }: UseArticleProps) =>
  useQuery({
    queryKey: ['articles', ...queryKey],
    queryFn: getArticles,
    refetchOnWindowFocus: true,
  })
