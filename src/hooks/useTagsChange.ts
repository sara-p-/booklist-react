import { useEffect, useState } from 'react'
import { useSettingsStore } from './Zustand/useSettingsStore'

export default function useTagsChange() {
  // Create a state to hold the checked value
  const [currentValue, setCurrentValue] = useState<string[]>([])
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    let newTags = [...settings.tags]
    if (newTags.includes(value)) {
      newTags = newTags.filter((tag) => tag !== value)
      setCurrentValue((prev) => prev.filter((tag) => tag !== value))
    } else {
      newTags = [...settings.tags, value]
      setCurrentValue((prev) => [...prev, value])
    }
    setSettings({ ...settings, tags: newTags })
  }

  // Update the tags to match the mobile tag settings
  // useEffect to update the tags based on the settings object. This comes into play if the tags are set/reset from the sidebar instead of the mobile menu.
  useEffect(() => {
    setCurrentValue(settings.tags)
  }, [settings.tags])

  return { currentValue, setCurrentValue, handleChange }
}
