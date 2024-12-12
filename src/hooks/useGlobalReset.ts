import { useResetButtonStore } from './Zustand/useResetButtonStore'
import { useSettingsStore } from './Zustand/useSettingsStore'
import { useOrderToggleStore } from './Zustand/useOrderToggleStore'
import { DEFAULT_VALUES } from '../global/global-variables'
import { useEffect, useState } from 'react'

export default function useGlobalReset() {
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string | string[]>()
  // Get the resetButton state from the Zustand store
  const resetButton = useResetButtonStore((state) => state.resetButton)
  // Get the settings from the Zustand store
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the resetButton state from the Zustand store
  const setResetButton = useResetButtonStore((state) => state.setResetButton)
  // Is the 'order' toggle checked? If so, reset the order to default
  const setIsOrderChecked = useOrderToggleStore(
    (state) => state.setIsOrderChecked
  )

  // OnClick function for the global reset button
  function handleGlobalReset() {
    setSettings(DEFAULT_VALUES)
    setResetButton(true)
    setIsOrderChecked(false)
  }

  // Reset the checked state when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setCurrentValue('')
    }
  }, [resetButton])

  return { currentValue, handleGlobalReset }
}
