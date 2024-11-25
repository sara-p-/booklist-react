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
  return (
    <div className='mobile-radio-button'>
      <input type='radio' id='radio-button' name={name} value={value} />
      <label htmlFor='radio-button'>{label}</label>
    </div>
  )
}
