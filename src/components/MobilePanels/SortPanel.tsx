import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'
import { SORT_OPTIONS } from '../../global/global-variables'

export default function SortPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  function handleSortChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings({ ...settings, sort: value })
  }

  return (
    <MobilePanel title='sort'>
      <MobileHeader title='sort' />
      <MobileContent>
        {SORT_OPTIONS.map((option) => (
          <MobileRadioButton
            key={option}
            name='sort'
            value={option}
            onChange={handleSortChange}
            checked={settings.sort === option}
          />
        ))}
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
