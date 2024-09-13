export interface NYTSearch {
  status: string
  copyright: string
  response: Response
}

export interface Response {
  docs: Doc[]
  meta: Meta
}

export interface Doc {
  abstract: string
  web_url: string
  snippet: string
  lead_paragraph: string
  source: Source
  multimedia: Multimedia[]
  headline: Headline
  keywords: Keyword[]
  pub_date: string
  document_type: DocumentType
  news_desk: string
  section_name: string
  subsection_name?: string
  byline: Byline
  type_of_material: string
  _id: string
  word_count: number
  uri: string
  print_section?: string
  print_page?: string
}

export interface Byline {
  original: string
  person: Person[]
  organization: null | string
}

export interface Person {
  firstname: string
  middlename: null | string
  lastname: null | string
  qualifier: null
  title: null
  role: string
  organization: string
  rank: number
}

export interface Headline {
  main: string
  kicker: null | string
  content_kicker: null
  print_headline: null | string
  name: null
  seo: null
  sub: null
}

export interface Keyword {
  name: string
  value: string
  rank: number
  major: string
}

export interface Multimedia {
  rank: number
  subtype: string
  caption: null
  credit: null
  type: string
  url: string
  height: number
  width: number
  legacy: Legacy
  subType: string
  crop_name: string
}

export interface Legacy {
  widewidth?: number
  wideheight?: number
  wide?: string
  xlarge?: string
  xlargewidth?: number
  xlargeheight?: number
  thumbnail?: string
  thumbnailwidth?: number
  thumbnailheight?: number
}

export enum Source {
  InternationalNewYorkTimes = 'International New York Times',
  TheNewYorkTimes = 'The New York Times',
}

export interface Meta {
  hits: number
  offset: number
  time: number
}
