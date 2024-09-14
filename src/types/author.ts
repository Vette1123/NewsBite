export interface AuthorResponse {
  currentPage: number
  orderBy: string
  pageSize: number
  pages: number
  startIndex: number
  status: string
  total: number
  userTier: string
  results: ArticleAuthor[]
}

export interface ArticleAuthor {
  apiUrl: string
  id: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  sectionId: string
  sectionName: string
  tags: Tag[]
  type: string
  webPublicationDate: Date
  webTitle: string
  webUrl: string
}

export interface Tag {
  apiUrl: string
  firstName: string
  id: string
  lastName: string
  references: any[]
  type: string
  webTitle: string
  webUrl: string
}
