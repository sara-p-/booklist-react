import { DefaultValuesType } from '../../../global/types'
import MobilePanel from '../MobilePanel/MobilePanel'
import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'

type OptionsPanelProps = {
  handlePanelClick: (
    title: string,
    panelRef: React.RefObject<HTMLDivElement[]>
  ) => void
  panelRef: React.RefObject<HTMLDivElement[]>
  onBackButtonClick: () => void
}

export default function OptionsPanel({
  handlePanelClick,
  panelRef,
  onBackButtonClick,
}: OptionsPanelProps) {
  const settings = useSettingsStore((state) => state.settings)

  return (
    <MobilePanel title='options' onBackButtonClick={onBackButtonClick}>
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
