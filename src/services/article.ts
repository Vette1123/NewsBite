import { NYT_API_KEY, NYT_BASE_URL, NYT_SEARCH_ARTICLES_BASE_URL } from '@/lib/constants'
import { NYTArticle } from '@/types/nyt-article'
import axios from 'axios'
import { format } from 'date-fns'

export const getArticles = async (query: any): Promise<NYTArticle> => {
  const [_, section, startDate, endDate] = query.queryKey
  const sectionQuery = !!section ? section : 'home'
  let startDateQuery = ''
  let endDateQuery = ''
  let baseURL = ''

  if (startDate) {
    startDateQuery = format(new Date(startDate), 'yyyyMMdd')
  }
  if (endDate) {
    endDateQuery = format(new Date(endDate), 'yyyyMMdd')
  }

  if (startDate || endDate) {
    baseURL = `${NYT_SEARCH_ARTICLES_BASE_URL}?api-key=${NYT_API_KEY}`
    if (startDate) {
      baseURL += `&begin_date=${startDateQuery}`
    }
    if (endDate) {
      baseURL += `&end_date=${endDateQuery}`
    }
  } else {
    baseURL = `${NYT_BASE_URL}${sectionQuery}.json?api-key=${NYT_API_KEY}`
  }

  const response = await axios.get(baseURL)
  return response?.data
}
