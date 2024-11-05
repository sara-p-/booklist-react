import { useId } from 'react'
import './SortButton.css'

type SortButtonProps = {
  label: string
  icon: React.ReactNode
  checked: boolean
  handleSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SortButton({
  label,
  icon,
  checked,
  handleSortChange,
}: SortButtonProps) {
  const id = useId()
  const sortId = `sort-${id}`

  return (
    <div className='sort-box'>
      <input
        className='sort-radio'
        type='radio'
        id={sortId}
        name='sort-radio'
        value={label}
        checked={checked}
        onChange={handleSortChange}
      />
      <label htmlFor={sortId}>
        {icon}
        <span className='visually-hidden'>Sort by</span>
        {label}
      </label>
    </div>
  )
}
