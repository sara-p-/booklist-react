import { useEffect, useId, useState } from 'react'
import { useSettingsStore } from '../../../../hooks/useSettingsStore'
import { useResetButtonStore } from '../../../../hooks/useResetButtonStore'

type TagProps = {
  value: string
  disabled: boolean
}

export default function Tag({ value, disabled }: TagProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const id = useId()
  const checkboxId = `${id}-${value}`
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  // Get the resetButton state from the Zustand store
  const resetButton = useResetButtonStore((state) => state.resetButton)

  function handleChange() {
    let newTags = [...settings.tags]
    if (newTags.includes(value)) {
      newTags = newTags.filter((tag) => tag !== value)
    } else {
      newTags = [...settings.tags, value]
    }
    setChecked(!checked)
    setSettings({ ...settings, tags: newTags })
  }

  // Reset the checked state when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setChecked(false)
    }
  }, [resetButton])

  return (
    <div className='tag-box'>
      <input
        checked={checked}
        onChange={handleChange}
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
