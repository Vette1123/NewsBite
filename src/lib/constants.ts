const NYT_TOP_STORIES_BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/'

const NYT_SEARCH_ARTICLES_BASE_URL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json'

const NEWS_API_SOURCES_BASE_URL = 'https://newsapi.org/v2/top-headlines/sources'

const THE_GUARDIAN_BASE_URL =
  'https://content.guardianapis.com/search?show-tags=contributor&page-size=50&order-by=newest&type=article'

const NYT_SECTIONS = [
  'home',
  'arts',
  'automobiles',
  'books',
  'business',
  'fashion',
  'food',
  'health',
  'insider',
  'magazine',
  'movies',
  'nyregion',
  'obituaries',
  'opinion',
  'politics',
  'realestate',
  'science',
  'sports',
  'sundayreview',
  'technology',
  'theater',
  't-magazine',
  'travel',
  'upshot',
  'us',
  'world',
] as const

export type NYTSection = (typeof NYT_SECTIONS)[number]

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY
const THE_GUARDIAN_API_KEY = import.meta.env.VITE_THE_GUARDIAN_API_KEY
const NEWS_API_ORG_KEY = import.meta.env.VITE_NEWS_API_ORG_KEY

export {
  NYT_TOP_STORIES_BASE_URL as NYT_BASE_URL,
  NYT_SECTIONS,
  NYT_API_KEY,
  NYT_SEARCH_ARTICLES_BASE_URL,
  NEWS_API_ORG_KEY,
  NEWS_API_SOURCES_BASE_URL,
  THE_GUARDIAN_API_KEY,
  THE_GUARDIAN_BASE_URL,
}
