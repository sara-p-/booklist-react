import { DefaultValuesType } from '../../../global/types'
import MobilePanel from '../MobilePanel/MobilePanel'
import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import { forwardRef } from 'react'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'

type OptionsPanelProps = {
  handlePanelClick: (
    title: string,
    panelRef: React.RefObject<HTMLDivElement[]>
  ) => void
  panelRef: React.RefObject<HTMLDivElement[]>
  onBackButtonClick?: () => void
}

function OptionsPanel({ handlePanelClick, panelRef }: OptionsPanelProps) {
  const settings = useSettingsStore((state) => state.settings)
  // Get the setIsActive function from the Zustand store so we can close the mobile menu when the back button is clicked
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)

  function handleBackButtonClick() {
    setIsActive(false)
  }

  return (
    <MobilePanel title='options' onBackButtonClick={handleBackButtonClick}>
      {Object.keys(settings).map((key) => {
        return (
          <MobilePanelButton
            key={key}
            title={key}
            onClick={() => handlePanelClick(key, panelRef)}
            value={
              String(settings[key as keyof DefaultValuesType]) === ''
                ? 'none'
                : String(settings[key as keyof DefaultValuesType])
            }
          />
        )
      })}
    </MobilePanel>
  )
}

export default forwardRef(OptionsPanel)
