import { useId } from 'react'
// import { useCallback, useEffect, useId, useState } from 'react'
// import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'
// import { useResetButtonStore } from '../../../../hooks/Zustand/useResetButtonStore'
// import { useSettingsUpdateStore } from '../../../../hooks/Zustand/useSettingsUpdateStore'

type TagProps = {
  value: string
  disabled: boolean
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Tag({ value, disabled, checked, onChange }: TagProps) {
  // // Create a state to hold the checked value
  // const [currentValue, setCurrentValue] = useState<string[]>([])
  const id = useId()
  const checkboxId = `${id}-${value}`
  // // Get the settings from the Zustand store
  // const settings = useSettingsStore((state) => state.settings)
  // const setSettings = useSettingsStore((state) => state.setSettings)

  // // Get the resetButton state from the Zustand store
  // const resetButton = useResetButtonStore((state) => state.resetButton)

  // const handleChange = useCallback(() => {
  //   let newTags = [...settings.tags]
  //   if (newTags.includes(value)) {
  //     newTags = newTags.filter((tag) => tag !== value)
  //     setCurrentValue((prev) => prev.filter((tag) => tag !== value))
  //   } else {
  //     newTags = [...settings.tags, value]
  //     setCurrentValue((prev) => [...prev, value])
  //   }
  //   setSettings({ ...settings, tags: newTags })
  // }, [settings, value, setSettings])

  // // Reset the checked state when the reset button is clicked
  // useEffect(() => {
  //   if (resetButton) {
  //     setCurrentValue([])
  //   }
  // }, [resetButton])

  // // Update the tags to match the mobile tag settings
  // // useEffect to update the tags based on the settings object. This comes into play if the tags are set/reset from the sidebar instead of the mobile menu.
  // useEffect(() => {
  //   setCurrentValue(settings.tags)
  // }, [settings.tags])

  return (
    <div className='tag-box'>
      <input
        checked={checked}
        onChange={onChange}
        type='checkbox'
        value={value}
        id={checkboxId}
        className='tag'
        disabled={disabled}
      />
      <label className='tag-label' htmlFor={checkboxId}>
        {value}
      </label>
    </div>
  )
}
