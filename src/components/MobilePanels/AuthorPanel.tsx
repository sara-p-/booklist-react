import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'
import { useDataStore } from '../../hooks/Zustand/useDataStore'
import { simplifyAndSort } from '../../utils/array-utils'
import { BookType } from '../../global/types'
import { useEffect, useState } from 'react'

export default function AuthorPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState('')
  // Get the data from the store
  const data = useDataStore((state) => state.data)
  // Create the radio buttons for the panel based on the data object
  const authors = simplifyAndSort(data.map((book: BookType) => book.author))

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings((settings) => ({ ...settings, author: value }))
  }

  useEffect(() => {
    setCurrentValue(settings.author)
  }, [settings.author])

  return (
    <MobilePanel title='author'>
      <MobileHeader title='author' />
      <MobileContent>
        {authors.map((author) => (
          <MobileRadioButton
            key={author}
            name='author'
            value={author}
            onChange={handleThemeChange}
            checked={currentValue === author}
          />
        ))}
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
