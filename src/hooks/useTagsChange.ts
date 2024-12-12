import { useEffect, useState } from 'react'
import { useSettingsStore } from './Zustand/useSettingsStore'
// import { useResetButtonStore } from './Zustand/useResetButtonStore'

export default function useTagsChange() {
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string[]>([])
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the resetButton state from the Zustand store
  // const resetButton = useResetButtonStore((state) => state.resetButton)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    // update the tags array with the new tag if it's not already in the array, else remove it
    // I'm using useState along with the settings object because when I tried to use just the settings object, the checkbox wasn't "checking" in sync with the click.
    if (!settings.tags.includes(value)) {
      setCurrentValue((prev) => [...prev, value])
      setSettings((settings) => ({
        ...settings,
        tags: [...settings.tags, value],
      }))
    } else {
      setCurrentValue((prev) => prev.filter((tag) => tag !== value))
      setSettings((settings) => ({
        ...settings,
        tags: settings.tags.filter((tag) => tag !== value),
      }))
    }
  }

  // Update the tags to match the mobile tag settings
  // useEffect to update the tags based on the settings object. This comes into play if the tags are set/reset from the sidebar instead of the mobile menu.
  useEffect(() => {
    setCurrentValue(settings.tags)
  }, [settings.tags])

  // // Reset the checked state when the reset button is clicked
  // useEffect(() => {
  //   if (resetButton) {
  //     setCurrentValue([])
  //   }
  // }, [resetButton])

  // // Clear the tags when the reset button is clicked
  // const handleClearTags = useCallback(() => {
  //   setSettings((settings) => ({ ...settings, tags: [] }))
  //   setCurrentValue([])
  // }, [setSettings])

  return { currentValue, handleChange }
}
