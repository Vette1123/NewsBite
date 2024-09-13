export interface NYTArticle {
  status: string
  copyright: string
  section: string
  last_updated: Date
  num_results: number
  results: ArticleResult[]
  response?: {
    docs: ArticleResult[]
  }
}

export interface ArticleResult {
  section: string
  subsection: string
  section_name?: string
  pub_date: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: string
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: string
  kicker: string
  des_facet: string[]
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  multimedia: Multimedia[]
  short_url: string
}

export interface Multimedia {
  url: string
  format: string
  height: number
  width: number
  type: string
  subtype: string
  caption: string
  copyright: string
}

export enum Format {
  LargeThumbnail = 'Large Thumbnail',
  SuperJumbo = 'Super Jumbo',
  ThreeByTwoSmallAt2X = 'threeByTwoSmallAt2X',
}

export enum Subtype {
  Photo = 'photo',
}

export enum Type {
  Image = 'image',
}

export interface UnifiedArticleResult {
  status: string
  copyright: string
  results: UnifiedArticle[]
}

export interface UnifiedArticle {
  section: string
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  published_date: string
  multimedia: Multimedia[]
  kicker: string
  des_facet: string[]
}
