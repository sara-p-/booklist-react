import { useState } from 'react'
import './Toggle.css'

type ToggleProps = {
  label: string
  toggleId: string
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
  handleBookValueChange: (value: string, key: string) => void
}

export default function Toggle({
  label,
  toggleId,
  iconLeft,
  iconRight,
  handleBookValueChange,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleToggleChange(): void {
    const newValue = !isChecked
    setIsChecked(newValue)
    handleBookValueChange(newValue.toString(), toggleId.toLowerCase())
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
