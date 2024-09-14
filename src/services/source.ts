import { NEWS_API_ORG_KEY, NEWS_API_SOURCES_BASE_URL } from '@/lib/constants'
import { ArticleSourceResponse } from '@/types/source'
import axios from 'axios'

export const getSources = async (): Promise<ArticleSourceResponse> => {
  const response = await axios.get(
    `${NEWS_API_SOURCES_BASE_URL}?apiKey=${NEWS_API_ORG_KEY}`
  )
  return response.data
}
