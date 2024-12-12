import { useSettingsStore } from './Zustand/useSettingsStore'
// import { useOrderToggleStore } from './Zustand/useOrderToggleStore'
import { DEFAULT_VALUES } from '../global/global-variables'
import { useState } from 'react'

export default function useLocalReset(settingKey: keyof typeof DEFAULT_VALUES) {
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string | string[]>()

  // Get the settings from the Zustand store
  // const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  // // Is the 'order' toggle checked? If so, reset the order to default
  // const setIsOrderChecked = useOrderToggleStore(
  //   (state) => state.setIsOrderChecked
  // )

  // Get the default value for the specific setting
  const settingValue = DEFAULT_VALUES[settingKey]

  // OnClick function for the local reset button
  function handleLocalReset() {
    setSettings((settings) => ({ ...settings, [settingKey]: settingValue }))
    setCurrentValue(settingValue)
  }

  return { currentValue, handleLocalReset }
}
