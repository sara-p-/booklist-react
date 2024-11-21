import useFetchData from './useFetchData'
import { useUpdateBooksStore } from './Zustand/useUpdateBookStore'
import { useSettingsStore } from './Zustand/useSettingsStore'
import { useDataStore } from './Zustand/useDataStore'
import { useResetButtonStore } from './Zustand/useResetButtonStore'
import { useEffect } from 'react'

export default function useBookInfo() {
  // Get the book data object
  const { data } = useFetchData('../../api/booklist.json')
  // Get the book object from the Zustand store
  const books = useUpdateBooksStore((state) => state.books)
  const setBooks = useUpdateBooksStore((state) => state.setBooks)
  // Get the settings object from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setData = useDataStore((state) => state.setData)
  // Get the reset button state
  const resetButton = useResetButtonStore((state) => state.resetButton)
  const setResetButton = useResetButtonStore((state) => state.setResetButton)

  // Store the book data in the Zustand store
  useEffect(() => {
    let isMounted = true
    if (isMounted && data) {
      setBooks(data, settings)
      setData(data)
    }
    if (isMounted && resetButton) {
      setBooks(data, settings)
      setResetButton(false)
    }
    return () => {
      isMounted = false
    }
  }, [data, setBooks, settings, setData, resetButton, setResetButton])

  return { books }
}
