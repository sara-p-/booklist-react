import { useId } from 'react'

type FilterOptionProps = {
  group: string
  value: string
  handleOptionClick: (e: React.ChangeEvent<HTMLInputElement>) => void
  isOptionChecked: boolean
}

export default function FilterOption({
  group,
  value,
  handleOptionClick,
  isOptionChecked,
}: FilterOptionProps) {
  const id = useId()
  const radioId = `${id}-${group}`

  return (
    <li className='filter-option'>
      <input
        className='filter-radio'
        id={radioId}
        type='radio'
        name={group}
        value={value}
        onChange={handleOptionClick}
        checked={isOptionChecked}
      />
      <label htmlFor={radioId} className='filter-label'>
        {value}
      </label>
    </li>
  )
}
