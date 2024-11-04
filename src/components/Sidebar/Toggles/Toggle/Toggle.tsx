import { useState } from 'react'
import './Toggle.css'

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
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='toggle-box'>
      {iconLeft}
      <input
        className='toggle'
        type='checkbox'
        value={isChecked.toString()}
        onChange={() => setIsChecked(!isChecked)}
        id={toggleId}
      />
      <label htmlFor={toggleId}>{label}</label>
      {iconRight}
    </div>
  )
}
