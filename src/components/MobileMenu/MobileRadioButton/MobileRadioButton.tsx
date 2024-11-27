import radioButtonStyles from './MobileRadioButton.module.css'
import { useId } from 'react'

type MobileRadioButtonProps = {
  name: string
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MobileRadioButton({
  name,
  value,
  checked,
  onChange,
}: MobileRadioButtonProps) {
  const id = useId()
  const radioId = `radio-${id}`

  return (
    <div className={radioButtonStyles.button}>
      <input
        className={radioButtonStyles.radio}
        type='radio'
        id={radioId}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className={radioButtonStyles.label} htmlFor={radioId}>
        {value}
      </label>
    </div>
  )
}
