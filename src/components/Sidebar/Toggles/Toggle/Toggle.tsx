import { useState } from 'react'
import './Toggle.css'
import { useSettingsStore } from '../../../../hooks/useSettingsStore'
import { useContentClassStore } from '../../../../hooks/useContentClassStore'

type ToggleProps = {
  label: string
  toggleId: string
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
}

export default function Toggle({
  label,
  toggleId,
  iconLeft,
  iconRight,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  const setContentClass = useContentClassStore((state) => state.setContentClass)

  function handleToggleChange(): void {
    const newValue = !isChecked
    setIsChecked(newValue)
    setSettings({ ...settings, [toggleId.toLowerCase()]: newValue })
    if (toggleId === 'view') {
      setContentClass(newValue)
    }
  }

  return (
    <div className='toggle-box'>
      {iconLeft}
      <input
        className='toggle'
        type='checkbox'
        value={toggleId}
        checked={isChecked}
        onChange={handleToggleChange}
        id={toggleId}
      />
      <label htmlFor={toggleId}>{label}</label>
      {iconRight}
    </div>
  )
}
