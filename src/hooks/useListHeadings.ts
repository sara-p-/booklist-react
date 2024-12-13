import { useEffect } from 'react'
import { filterListHeadings } from '../utils/filter-utils'
import { useListHeadingStore } from './Zustand/useListHeadingStore'
import { useSettingsStore } from './Zustand/useSettingsStore'
import { BookType } from '../global/types'

export default function useListHeadings(books: BookType[]) {
  // // get the list headings from the useListHeadingStore hook
  const setListHeadings = useListHeadingStore((state) => state.setListHeadings)
  const listHeadings = useListHeadingStore((state) => state.listHeadings)
  // Get the settings from the Zustand store
  const sortSetting = useSettingsStore((state) => state.settings.sort)
  // Set the list headings when the sort setting changes
  useEffect(() => {
    setListHeadings(filterListHeadings(books, sortSetting) ?? [])
  }, [sortSetting, books, setListHeadings])

  return { listHeadings, sortSetting }
}
