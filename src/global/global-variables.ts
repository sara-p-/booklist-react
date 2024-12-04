import { DefaultValuesType } from './types'

// Object that lists the default values for the booklist filters
export const DEFAULT_VALUES: DefaultValuesType = {
  theme: 'light',
  view: 'grid',
  order: 'asc',
  sort: 'series',
  author: '',
  series: '',
  tags: [],
}

export const SORT_OPTIONS = ['series', 'title', 'rating', 'year', 'length']
