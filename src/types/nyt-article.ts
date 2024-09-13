export interface NYTArticle {
  status: string
  copyright: string
  section: string
  last_updated: Date
  num_results: number
  results: Result[]
}

export interface Result {
  section: string
  subsection: Subsection
  title: string
  abstract: string
  url: string
  uri: string
  byline: string
  item_type: ItemType
  updated_date: string
  created_date: string
  published_date: string
  material_type_facet: string
  kicker: Kicker
  des_facet: string[]
  org_facet: string[]
  per_facet: string[]
  geo_facet: string[]
  multimedia: Multimedia[]
  short_url: string
}

export enum ItemType {
  Article = 'Article',
}

export enum Kicker {
  AskNYTClimate = 'Ask NYT Climate',
  Empty = '',
  Episode = 'episode',
  TheUltimateTeamSportsAndFashion = 'The Ultimate Team: Sports and Fashion',
  TimesInsider = 'times insider',
}

export interface Multimedia {
  url: string
  format: Format
  height: number
  width: number
  type: Type
  subtype: Subtype
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

export enum Subsection {
  Asia = 'asia',
  Autoracing = 'autoracing',
  Collectibles = 'collectibles',
  Economy = 'economy',
  Empty = '',
  EnergyEnvironment = 'energy-environment',
}
