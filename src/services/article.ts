import {
  NYT_API_KEY,
  NYT_BASE_URL,
  NYT_SEARCH_ARTICLES_BASE_URL,
} from '@/lib/constants'
import { NYTArticle, UnifiedArticleResult } from '@/types/nyt-article'
import { NYTSearch } from '@/types/nyt-search-article'
import axios from 'axios'
import { format } from 'date-fns'

export async function getArticles(query: any): Promise<UnifiedArticleResult> {
  const [_, category, keyword, startDate, endDate, source] = query?.queryKey
  const isSearch = !!(startDate || endDate || keyword || source)

  const querySection = !!category ? category : 'home'

  const baseURL = isSearch
    ? `${NYT_SEARCH_ARTICLES_BASE_URL}?api-key=${NYT_API_KEY}`
    : `${NYT_BASE_URL}${querySection}.json?api-key=${NYT_API_KEY}`

  const params: Record<string, string> = {}

  if (isSearch) {
    if (startDate) params.begin_date = format(new Date(startDate), 'yyyyMMdd')
    if (endDate) params.end_date = format(new Date(endDate), 'yyyyMMdd')
    if (keyword) params.q = keyword
    if (source) params.fq = `${source}`
    // if (source) params.fq = `source:("${source}")`
    params.sort = 'newest'
  }

  const response = await axios.get(baseURL, { params })
  const data = response.data

  return isSearch ? unifySearchResults(data) : unifyTopStories(data)
}

function unifySearchResults(data: NYTSearch): UnifiedArticleResult {
  return {
    status: data.status,
    copyright: data.copyright,
    results: data.response.docs.map((doc) => ({
      section: doc.section_name,
      title: doc.headline.main,
      abstract: doc.abstract,
      url: doc.web_url,
      uri: doc.uri,
      byline: doc.byline.original || '',
      kicker: '',
      des_facet: [],
      published_date: doc.pub_date,
      multimedia: doc.multimedia.map((media) => ({
        url: `https://www.nytimes.com/${media.url}`,
        format: media.subtype,
        height: media.height,
        width: media.width,
        type: media.type,
        subtype: media.subtype,
        caption: media.caption || '',
        copyright: '',
      })),
    })),
  }
}

function unifyTopStories(data: NYTArticle): UnifiedArticleResult {
  return {
    status: data.status,
    copyright: data.copyright,
    results: data.results.map((result) => ({
      section: result.section,
      title: result.title,
      abstract: result.abstract,
      url: result.url,
      uri: result.uri,
      byline: result.byline,
      published_date: result.published_date,
      multimedia: result.multimedia,
      kicker: result.kicker,
      des_facet: result.des_facet || [],
    })),
  }
}
