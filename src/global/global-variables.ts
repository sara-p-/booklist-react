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
