// type of book object
export type BookType = {
  id: string
  title: string
  series: string
  number: string
  author: string
  year: string
  length: string
  rating: string
  spiciness: string
  finish: string
  show: string
  tags: string
  description: string
  smell: string
  purchased: string
  finished: string
  notes: string
  percent: string
}

// default type for the booklist filters
export type DefaultValuesType = {
  theme: boolean
  view: boolean
  order: boolean
  sort: string
  author: string
  series: string
  tags: string
}

// Object that lists the default values for the booklist filters
export const DEFAULT_VALUES: DefaultValuesType = {
  theme: false,
  view: false,
  order: false,
  sort: 'series',
  author: '',
  series: '',
  tags: '',
}
