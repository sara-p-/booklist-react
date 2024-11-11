import { useId, useState } from 'react'

type FilterOptionProps = {
  group: string
  value: string
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FilterOption({
  group,
  value,
  handleOptionChange,
}: FilterOptionProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const id = useId()
  const radioId = `${id}-${group}`

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // e.preventDefault()
    setIsChecked(!isChecked)
    handleOptionChange(e)
    console.log({
      value: e.currentTarget.value,
      checked: e.currentTarget.checked,
      isChecked: !isChecked,
    })
  }

  return (
    <li className='filter-option'>
      <input
        className='filter-radio'
        id={radioId}
        type='radio'
        name={group}
        value={value}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor={radioId} className='filter-label'>
        {value}
      </label>
    </li>
  )
}
