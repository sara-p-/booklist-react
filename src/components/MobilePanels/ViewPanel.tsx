import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'

export default function ThemePanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  function handleViewChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings({ ...settings, view: value })
  }

  return (
    <MobilePanel title='view'>
      <MobileHeader title='view' />
      <MobileContent>
        <MobileRadioButton
          name='view'
          value='grid'
          onChange={handleViewChange}
          checked={settings.view === 'grid'}
        />
        <MobileRadioButton
          name='view'
          value='list'
          onChange={handleViewChange}
          checked={settings.view === 'list'}
        />
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
