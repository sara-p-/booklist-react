import { useEffect, useId, useState } from 'react'
import './SortButton.css'
import { useResetButtonStore } from '../../../../hooks/useResetButtonStore'

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
  // const [currentlyChecked, setCurrentlyChecked] = useState<boolean>(checked)
  // const resetButton = useResetButtonStore((state) => state.resetButton)

  // console.log({ label, currentlyChecked })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // setCurrentlyChecked(!currentlyChecked)
    handleSortChange(e)
  }

  // useEffect(() => {
  //   if (resetButton) {
  //     setCurrentlyChecked(false)
  //   }
  // }, [resetButton])

  return (
    <div className='sort-box'>
      <input
        className='sort-radio'
        type='radio'
        id={sortId}
        name='sort-radio'
        value={label}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={sortId}>
        {icon}
        <span className='visually-hidden'>Sort by</span>
        {label}
      </label>
    </div>
  )
}
