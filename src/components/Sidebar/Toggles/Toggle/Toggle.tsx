import { useState } from 'react'
import './Toggle.css'
import { useBooksStore } from '../../../../hooks/useBooksStore'

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
  const settings = useBooksStore((state) => state.settings)
  const setSettings = useBooksStore((state) => state.setSettings)

  function handleToggleChange(): void {
    const newValue = !isChecked
    setIsChecked(newValue)
    setSettings({ ...settings, [toggleId.toLowerCase()]: newValue })
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
