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

export default function SeriesPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState('')
  // Get the data from the store
  const data = useDataStore((state) => state.data)
  // Create the radio buttons for the panel based on the data object
  const series = simplifyAndSort(data.map((book: BookType) => book.series))

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings((settings) => ({ ...settings, series: value }))
  }

  useEffect(() => {
    setCurrentValue(settings.series)
  }, [settings.series])

  return (
    <MobilePanel title='series'>
      <MobileHeader title='series' />
      <MobileContent>
        {series.map((series) => (
          <MobileRadioButton
            key={series}
            name='series'
            value={series}
            onChange={handleThemeChange}
            checked={currentValue === series}
          />
        ))}
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
