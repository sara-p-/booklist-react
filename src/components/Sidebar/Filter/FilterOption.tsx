import { useEffect, useId, useState } from 'react'
import { useResetButtonStore } from '../../../hooks/useResetButtonStore'

type FilterOptionProps = {
  group: string
  value: string
  isSelected: boolean
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FilterOption({
  group,
  value,
  isSelected,
  handleOptionChange,
}: FilterOptionProps) {
  const id = useId()
  const radioId = `${id}-${group}`
  const [currentSelection, setCurrentSelection] = useState<boolean>(isSelected)
  const resetButton = useResetButtonStore((state) => state.resetButton)

  useEffect(() => {
    if (resetButton) {
      setCurrentSelection(false)
    }
  }, [resetButton])

  return (
    <li className='filter-option'>
      <input
        className='filter-radio'
        id={radioId}
        type='radio'
        name={group}
        value={value}
        onChange={handleOptionChange}
        checked={currentSelection}
      />
      <label htmlFor={radioId} className='filter-label'>
        {value}
      </label>
    </li>
  )
}
