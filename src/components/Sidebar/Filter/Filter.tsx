import { useEffect, useState } from 'react'
import FilterButton from './FilterButton'
import FilterOption from './FilterOption'
import { useSettingsStore } from '../../../hooks/useSettingsStore'
import { DefaultValuesType } from '../../../global/types'
import { useResetButtonStore } from '../../../hooks/useResetButtonStore'

type FilterProps = {
  label: string
  options: string[]
}

export default function Filter({ label, options }: FilterProps) {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const [theClasses, setTheClasses] = useState('filter-box')
  const [newLabel, setNewLabel] = useState(label)
  const [newLabelValue, setNewLabelValue] = useState('')
  // Grab the necessary values from the Zustand store
  const settings: DefaultValuesType = useSettingsStore(
    (state) => state.settings
  )
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the resetButton state from the Zustand store to define when the filter should reset
  const resetButton = useResetButtonStore((state) => state.resetButton)

  const newOptions = options.map((option) => {
    const theKey = crypto.randomUUID()
    return { key: theKey, value: option }
  })

  function handleButtonClick() {
    const newState = !isDropdownActive
    // If the filter is open (when the user clicks), remove the new label and close the filter
    if (!newState) {
      setNewLabel(label)
      setNewLabelValue('')
      setSettings({ ...settings, [label]: '' })
    }
    setIsDropdownActive(newState)
    const newClass = newState ? 'filter-box active' : 'filter-box'
    setTheClasses(newClass)
  }

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setSettings({ ...settings, [label]: value })
    setNewLabelValue(value)
    // When the user clicks an option, the class on the filter should change to include 'selected'
    const newClass = isDropdownActive ? 'filter-box selected' : 'filter-box'
    setTheClasses(newClass)
  }

  // Reset the filter when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setNewLabel(label)
      setIsDropdownActive(false)
      setNewLabelValue('')
      setTheClasses('filter-box')
    }
  }, [resetButton, label])

  return (
    <div className={theClasses}>
      <FilterButton
        label={newLabel}
        value={newLabelValue.toLowerCase()}
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
            isSelected={
              settings[label as keyof DefaultValuesType] === option.value
            }
          />
        ))}
      </ul>
    </div>
  )
}
