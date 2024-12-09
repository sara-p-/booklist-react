import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'

export default function ThemePanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings({ ...settings, theme: value })
  }

  return (
    <MobilePanel title='theme'>
      <MobileHeader title='theme' />
      <MobileContent>
        <MobileRadioButton
          name='theme'
          value='light'
          onChange={handleThemeChange}
          checked={settings.theme === 'light'}
        />
        <MobileRadioButton
          name='theme'
          value='dark'
          onChange={handleThemeChange}
          checked={settings.theme === 'dark'}
        />
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
