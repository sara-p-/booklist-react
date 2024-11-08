import { useState } from 'react'
import FilterButton from './FilterButton'
import FilterOption from './FilterOption'

type FilterProps = {
  label: string
  options: string[]
}

export default function Filter({ label, options }: FilterProps) {
  const [isActive, setIsActive] = useState(false)
  const [theClasses, setTheClasses] = useState('filter-box')

  const newOptions = options.map((option) => {
    const theKey = crypto.randomUUID()
    return { key: theKey, value: option }
  })

  function toggleActive() {
    const newState = !isActive
    setIsActive(newState)
    const newClass = newState ? 'filter-box active' : 'filter-box'
    setTheClasses(newClass)
  }

  return (
    <div className={theClasses}>
      <FilterButton
        label={label}
        isActive={isActive}
        toggleActive={toggleActive}
      />
      <ul className='filter-list'>
        {newOptions.map((option) => (
          <FilterOption key={option.key} group={label} value={option.value} />
        ))}
      </ul>
    </div>
  )
}
