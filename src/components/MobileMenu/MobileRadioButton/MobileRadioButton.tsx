import { useId } from 'react'

type MobileRadioButtonProps = {
  label: string
  name: string
  value: string
}

export default function MobileRadioButton({
  label,
  name,
  value,
}: MobileRadioButtonProps) {
  const id = useId()
  const radioId = `radio-${id}`
  return (
    <div className='mobile-radio-button'>
      <input
        className='mobile-radio'
        type='radio'
        id={radioId}
        name={name}
        value={value}
      />
      <label className='mobile-radio-label' htmlFor={radioId}>
        {label}
      </label>
    </div>
  )
}
