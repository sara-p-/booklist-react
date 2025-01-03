import { useEffect, useState } from 'react'
import { simplifyAndSort } from '../utils/array-utils'
import { BookType } from '../global/types'
import { useResetButtonStore } from './Zustand/useResetButtonStore'
import { useSettingsStore } from './Zustand/useSettingsStore'
import useBookInfo from './useBookInfo'

export default function useFilters(filterType: 'series' | 'author') {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState('')
  // Get the resetButton state from the Zustand store
  const resetButton = useResetButtonStore((state) => state.resetButton)
  // Get the books from the store
  const { books } = useBookInfo()
  // Create the radio buttons for the panel based on the data object
  const filterOptions = simplifyAndSort(
    books.map((book: BookType) => book[filterType])
  )

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings((settings) => ({ ...settings, [filterType]: value }))
  }

  useEffect(() => {
    setCurrentValue(settings[filterType])
  }, [settings, filterType])

  // Reset the filter when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setCurrentValue('')
    }
  }, [resetButton])

  return {
    currentValue,
    handleFilterChange,
    filterOptions,
  }
}
