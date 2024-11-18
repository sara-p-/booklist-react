import useFetchData from './useFetchData'
import { useBooksStore } from './useBooksStore'
import { useSettingsStore } from './useSettingsStore'
import { useDataStore } from './useDataStore'
import { useResetButtonStore } from './useResetButtonStore'
import { useEffect } from 'react'

export default function useBookInfo() {
  // Get the book data object
  const { data } = useFetchData('../../api/booklist.json')
  // Get the book object from the Zustand store
  const books = useBooksStore((state) => state.books)
  const setBooks = useBooksStore((state) => state.setBooks)
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
