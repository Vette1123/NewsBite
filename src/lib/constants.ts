const NYT_TOP_STORIES_BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/'
const NYT_SEARCH_ARTICLES_BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
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

export { NYT_TOP_STORIES_BASE_URL as NYT_BASE_URL, NYT_SECTIONS, NYT_API_KEY, NYT_SEARCH_ARTICLES_BASE_URL }
