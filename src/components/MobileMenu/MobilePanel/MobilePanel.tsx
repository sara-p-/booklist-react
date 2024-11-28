import panelStyles from './MobilePanel.module.css'
import { forwardRef, useEffect, useState } from 'react'
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
    const [newSettings, setNewSettings] = useState<DefaultValuesType>(
      {} as DefaultValuesType
    )
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
      // Update settings immediately and ensure the new value is used
      const newSettings = { ...settings, [title]: value }
      setSettings(newSettings)
    }

    // Update the newSettings state whenever settings change so that the checked state is updated
    useEffect(() => {
      setNewSettings(settings)
    }, [settings])

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
                const isChecked =
                  newSettings[title as keyof DefaultValuesType] === option
                return (
                  <MobileRadioButton
                    key={option}
                    name={title}
                    value={option}
                    onChange={handleRadioChange}
                    checked={isChecked}
                  />
                )
              })}
        </div>
      </div>
    )
  }
)

export default MobilePanel
