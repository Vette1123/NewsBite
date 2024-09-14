export interface ArticleSourceResponse {
  status: string
  sources: ArticleSource[]
}

export interface ArticleSource {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}
