import { useState } from 'react'
import FilterButton from './FilterButton'
import FilterOption from './FilterOption'

type FilterProps = {
  label: string
  options: string[]
  handleValueChange: (value: string | boolean, key: string) => void
}

export default function Filter({
  label,
  options,
  handleValueChange,
}: FilterProps) {
  const [isActive, setIsActive] = useState(false)
  const [theClasses, setTheClasses] = useState('filter-box')
  const [newLabel, setNewLabel] = useState(label)
  const [isOptionChecked, setIsOptionChecked] = useState(false)

  const newOptions = options.map((option) => {
    const theKey = crypto.randomUUID()
    return { key: theKey, value: option }
  })

  function handleButtonClick() {
    const newState = !isActive
    // If the filter is open, remove the new label and close the filter
    if (!newState) {
      setNewLabel(label)
      setIsOptionChecked(false)
      handleValueChange('', label)
    }
    setIsActive(newState)
    const newClass = newState ? 'filter-box active' : 'filter-box'
    setTheClasses(newClass)
  }

  function handleOptionClick(e: React.ChangeEvent<HTMLInputElement>) {
    if (isActive) {
      const value = e.currentTarget.value
      setNewLabel(value)
      handleValueChange(value, label)
    } else {
      setNewLabel(label)
    }
    setIsOptionChecked(!isOptionChecked)
  }

  return (
    <div className={theClasses}>
      <FilterButton
        label={newLabel}
        isActive={isActive}
        handleButtonClick={handleButtonClick}
      />
      <ul className='filter-list'>
        {newOptions.map((option) => (
          <FilterOption
            key={option.key}
            group={label}
            value={option.value}
            handleOptionClick={handleOptionClick}
            isOptionChecked={isOptionChecked}
          />
        ))}
      </ul>
    </div>
  )
}
