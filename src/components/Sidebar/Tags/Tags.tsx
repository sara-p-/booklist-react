import './Tags.css'
import Fieldset from '../Fieldset/Fieldset'
import Tag from './Tag/Tag'
import useTags from '../../../hooks/useTags'
import { useEffect } from 'react'
// import { useState } from 'react'
// import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import { useResetButtonStore } from '../../../hooks/Zustand/useResetButtonStore'
import useTagsChange from '../../../hooks/useTagsChange'

export default function Tags() {
  // Get all the tags and whether they are disabled or not
  const allTags = useTags()
  // Get the tags change hook
  const { currentValue, setCurrentValue, handleChange } = useTagsChange()
  // // Create a state to hold the checked value
  // const [currentValue, setCurrentValue] = useState<string[]>([])
  // // Get the settings from the Zustand store
  // const settings = useSettingsStore((state) => state.settings)
  // const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the resetButton state from the Zustand store
  const resetButton = useResetButtonStore((state) => state.resetButton)

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   const value = e.currentTarget.value
  //   let newTags = [...settings.tags]
  //   if (newTags.includes(value)) {
  //     newTags = newTags.filter((tag) => tag !== value)
  //     setCurrentValue((prev) => prev.filter((tag) => tag !== value))
  //   } else {
  //     newTags = [...settings.tags, value]
  //     setCurrentValue((prev) => [...prev, value])
  //   }
  //   setSettings({ ...settings, tags: newTags })
  // }

  // Reset the checked state when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setCurrentValue([])
    }
  }, [resetButton])

  // // Update the tags to match the mobile tag settings
  // // useEffect to update the tags based on the settings object. This comes into play if the tags are set/reset from the sidebar instead of the mobile menu.
  // useEffect(() => {
  //   setCurrentValue(settings.tags)
  // }, [settings.tags])

  return (
    <Fieldset legend='Tags'>
      {allTags &&
        allTags.map((tag) => (
          <Tag
            key={tag.tag}
            value={tag.tag}
            disabled={tag.disabled}
            onChange={handleChange}
            checked={currentValue.includes(tag.tag)}
          />
        ))}
    </Fieldset>
  )
}
