import { useId } from 'react'

type TagProps = {
  value: string
  disabled: boolean
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Tag({ value, disabled, checked, onChange }: TagProps) {
  const id = useId()
  const checkboxId = `${id}-${value}`

  return (
    <div className='tag-box'>
      <input
        checked={checked}
        onChange={onChange}
        type='checkbox'
        value={value}
        id={checkboxId}
        className='tag'
        disabled={disabled}
      />
      <label className='tag-label' htmlFor={checkboxId}>
        {value}
      </label>
    </div>
  )
}
