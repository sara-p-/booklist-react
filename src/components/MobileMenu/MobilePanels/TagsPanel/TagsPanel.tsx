import MobilePanel from '../../../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../../../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../../../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../../../MobileMenuComponents/MobileButtons/MobileButtons'
import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'
import { useDataStore } from '../../../../hooks/Zustand/useDataStore'
import { filterTags } from '../../../../utils/filter-utils'
import MobileTag from '../../../MobileMenuComponents/MobileTag/MobileTag'
import { useState } from 'react'
import Button from '../../../Button/Button'

export default function SeriesPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string[]>([])
  // Get the data from the store
  const data = useDataStore((state) => state.data)
  // Create the array that will be looped through to create the tags (checkboxes)
  const tags = filterTags(data)

  function handleTagChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    // update the tags array with the new tag if it's not already in the array, else remove it
    // I'm using useState along with the settings object because when I tried to use just the settings object, the checkbox wasn't "checking" in sync with the click.
    if (!settings.tags.includes(value)) {
      setCurrentValue((prev) => [...prev, value])
      setSettings((settings) => ({
        ...settings,
        tags: [...settings.tags, value],
      }))
    } else {
      setCurrentValue((prev) => prev.filter((tag) => tag !== value))
      setSettings((settings) => ({
        ...settings,
        tags: settings.tags.filter((tag) => tag !== value),
      }))
    }
  }

  // Clear/reset all the tags
  function handleClearTags() {
    setSettings((settings) => ({ ...settings, tags: [] }))
    setCurrentValue([])
  }

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
