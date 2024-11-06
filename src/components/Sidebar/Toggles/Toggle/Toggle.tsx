import { useState } from 'react'
import './Toggle.css'

type ToggleProps = {
  label: string
  toggleId: string
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
  handleValueChange: (value: string | boolean, key: string) => void
}

export default function Toggle({
  label,
  toggleId,
  iconLeft,
  iconRight,
  handleValueChange,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  function handleToggleChange(): void {
    const newValue = !isChecked
    setIsChecked(newValue)
    handleValueChange(newValue, toggleId.toLowerCase())
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
