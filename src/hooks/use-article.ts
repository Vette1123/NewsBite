import { getArticles } from '@/services/article'
import { useQuery } from '@tanstack/react-query'

export const useArticle = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    refetchOnWindowFocus: true,
  })
