import MobilePanel from '../../../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../../../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../../../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../../../MobileMenuComponents/MobileButtons/MobileButtons'
import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'
import { useDataStore } from '../../../../hooks/Zustand/useDataStore'
// import { useEffect, useState } from 'react'
import { filterTags } from '../../../../utils/filter-utils'
import MobileTag from '../../../MobileMenuComponents/MobileTag/MobileTag'
import { useEffect, useState } from 'react'
import Button from '../../../Button/Button'

export default function SeriesPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string[]>([])
  // Get the data from the store
  const data = useDataStore((state) => state.data)
  // Create the radio buttons for the panel based on the data object
  const tags = filterTags(data)

  function handleTagChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    console.log(value)
    // update the tags array with the new tag if it's not already in the array, else remove it
    if (!settings.tags.includes(value)) {
      setSettings((settings) => ({
        ...settings,
        tags: [...settings.tags, value],
      }))
    } else {
      setSettings((settings) => ({
        ...settings,
        tags: settings.tags.filter((tag) => tag !== value),
      }))
    }
  }

  function handleClearTags() {
    setSettings((settings) => ({ ...settings, tags: [] }))
  }

  useEffect(() => {
    setCurrentValue(settings.tags)
    console.log(settings.tags)
  }, [settings.tags])

  return (
    <MobilePanel title='tags'>
      <MobileHeader title='tags' />
      <MobileContent>
        {tags.map((tag) => (
          <MobileTag
            key={tag}
            tag={tag}
            checked={currentValue.includes(tag)}
            onChange={handleTagChange}
          />
        ))}
      </MobileContent>
      <MobileButtons>
        <Button onClick={handleClearTags}>clear</Button>
      </MobileButtons>
    </MobilePanel>
  )
}
