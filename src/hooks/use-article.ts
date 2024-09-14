import { getArticles } from '@/services/article'
import { useQuery } from '@tanstack/react-query'

interface UseArticleProps {
  queryKeys: any[]
}

export const useArticle = ({ queryKeys }: UseArticleProps) =>
  useQuery({
    queryKey: ['articles', ...queryKeys],
    queryFn: getArticles,
    refetchOnWindowFocus: true,
  })
