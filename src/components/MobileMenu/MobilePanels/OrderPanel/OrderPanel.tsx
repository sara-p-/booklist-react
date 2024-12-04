import MobilePanel from '../../../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../../../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../../../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../../../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../../MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'

export default function OrderPanel() {
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  function handleOrderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings({ ...settings, order: value })
  }

  return (
    <MobilePanel title='order'>
      <MobileHeader title='order' />
      <MobileContent>
        <MobileRadioButton
          name='order'
          value='asc'
          onChange={handleOrderChange}
          checked={settings.order === 'asc'}
        />
        <MobileRadioButton
          name='order'
          value='desc'
          onChange={handleOrderChange}
          checked={settings.order === 'desc'}
        />
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
