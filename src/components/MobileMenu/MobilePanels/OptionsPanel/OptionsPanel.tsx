import { DefaultValuesType } from '../../../../global/types'
import { useActiveMobilePanelStore } from '../../../../hooks/Zustand/useActiveMobilePanelStore'
import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'
import MobileButtons from '../../../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileContent from '../../../MobileMenuComponents/MobileContent/MobileContent'
import MobileHeader from '../../../MobileMenuComponents/MobileHeader/MobileHeader'
import MobilePanel from '../../../MobileMenuComponents/MobilePanel/MobilePanel'
import MobilePanelButton from '../../../MobileMenuComponents/MobilePanelButton/MobilePanelButton'

export default function OptionsPanel() {
  // Grab the settings so that we can loop through them and create a button for each one
  const settings = useSettingsStore((state) => state.settings)
  // On click of a PanelButton, set the active panel to the key of the button that was clicked
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )

  function handleButtonClick(key: string) {
    setActivePanel(key)
    console.log(key)
  }

  return (
    <MobilePanel title='options'>
      <MobileHeader title='options' />
      <MobileContent>
        {Object.keys(settings).map((key) => {
          return (
            <MobilePanelButton
              key={key}
              title={key}
              onClick={() => handleButtonClick(key)}
              value={
                String(settings[key as keyof DefaultValuesType]) === ''
                  ? 'none'
                  : String(settings[key as keyof DefaultValuesType])
              }
            />
          )
        })}
      </MobileContent>
      <MobileButtons></MobileButtons>
    </MobilePanel>
  )
}
