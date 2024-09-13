import { NYT_API_KEY, NYT_BASE_URL } from '@/lib/constants'
import { NYTArticle } from '@/types/nyt-article'
import axios from 'axios'

export const getArticles = async (query: any): Promise<NYTArticle> => {
  const [_, section] = query.queryKey

  const sectionQuery = !!section ? section : 'home'
  const response = await axios.get(`${NYT_BASE_URL}${sectionQuery}.json?api-key=${NYT_API_KEY}`)
  return response?.data
}
