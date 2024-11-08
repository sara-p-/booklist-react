import { useId } from 'react'

type FilterOptionProps = {
  group: string
  value: string
}

export default function FilterOption({ group, value }: FilterOptionProps) {
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
      />
      <label htmlFor={radioId} className='filter-label'>
        {value}
      </label>
    </li>
  )
}
