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
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [theClasses, setTheClasses] = useState('filter-box')
  const [newLabel, setNewLabel] = useState(label)

  const newOptions = options.map((option) => {
    const theKey = crypto.randomUUID()
    return { key: theKey, value: option }
  })

  function handleButtonClick() {
    const newState = !isDropdownActive
    // If the filter is open (when the user clicks), remove the new label and close the filter
    if (!newState) {
      setNewLabel(label)
      handleValueChange('', label)
    }
    setIsDropdownActive(newState)
    const newClass = newState ? 'filter-box active' : 'filter-box'
    setTheClasses(newClass)
  }

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    // e.preventDefault()
    const value = e.currentTarget.value
    handleValueChange(value, label)
    // setIsOptionChecked(!isOptionChecked)

    // If the filter is currently active and the user clicks an option
    if (isDropdownActive) {
      setNewLabel(value)
    } else {
      setNewLabel(label)
    }
  }

  return (
    <div className={theClasses}>
      <FilterButton
        label={newLabel}
        isActive={isDropdownActive}
        handleButtonClick={handleButtonClick}
      />
      <ul className='filter-list'>
        {newOptions.map((option) => (
          <FilterOption
            key={option.key}
            group={label}
            value={option.value}
            handleOptionChange={handleOptionChange}
          />
        ))}
      </ul>
    </div>
  )
}
