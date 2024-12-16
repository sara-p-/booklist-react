import { useEffect } from 'react'
import {
  filterListHeadings,
  filterListHeadingsByLength,
} from '../utils/filter-utils'
import { useListHeadingStore } from './Zustand/useListHeadingStore'
import { useSettingsStore } from './Zustand/useSettingsStore'
import { BookType } from '../global/types'

export default function useListHeadings(books: BookType[]) {
  // // get the list headings from the useListHeadingStore hook
  const setListHeadings = useListHeadingStore((state) => state.setListHeadings)
  const listHeadings = useListHeadingStore((state) => state.listHeadings)
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const sort = settings.sort
  const order = settings.order
  // Set the list headings when the sort setting changes
  useEffect(() => {
    if (sort !== 'length' && sort !== 'title') {
      setListHeadings(filterListHeadings(books, sort) ?? [])
    }
    if (sort === 'length') {
      setListHeadings(filterListHeadingsByLength(books, order))
    }
  }, [sort, order, books, setListHeadings])

  return { listHeadings, sort }
}
