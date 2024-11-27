import panelStyles from './MobilePanel.module.css'
import { forwardRef } from 'react'
import { MobilePanelHeader } from '../MobilePanelHeader/MobilePanelHeader'
import { useDataStore } from '../../../hooks/Zustand/useDataStore'
import { createMobileMenuOptions } from '../../../utils/array-utils'
import MobileRadioButton from '../MobileRadioButton/MobileRadioButton'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import { DefaultValuesType } from '../../../global/types'

type MobilePanelProps = {
  title: string
  children?: React.ReactNode
  onButtonClick?: () => void
  onBackButtonClick?: () => void
  activePanel?: boolean
}

const MobilePanel = forwardRef<HTMLDivElement, MobilePanelProps>(
  ({ title, children, onBackButtonClick, activePanel }, ref) => {
    const data = useDataStore((state) => state.data)
    // Create the options for the panel based on the data object
    const options = createMobileMenuOptions(title, data)
    // get the settings from the store
    const settings = useSettingsStore((state) => state.settings)
    const setSettings = useSettingsStore((state) => state.setSettings)
    // Create the class name for the panel based on the activePanel prop
    const panelClassName = `${panelStyles.panel} ${
      activePanel ? panelStyles.active : ''
    }`

    function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.currentTarget.value
      setSettings((prevSettings: DefaultValuesType) => ({
        ...prevSettings,
        [title as keyof DefaultValuesType]: value,
      }))
    }

    return (
      <div className={panelClassName} data-panel={title} ref={ref}>
        <MobilePanelHeader
          title={title}
          onClick={() => onBackButtonClick?.()}
        />
        <div className={panelStyles.wrapper}>
          {children
            ? children
            : options.map((option) => {
                return (
                  <MobileRadioButton
                    key={option}
                    name={title}
                    value={option}
                    checked={
                      settings[title as keyof DefaultValuesType] === option
                    }
                    onChange={handleRadioChange}
                  />
                )
              })}
        </div>
      </div>
    )
  }
)

export default MobilePanel
