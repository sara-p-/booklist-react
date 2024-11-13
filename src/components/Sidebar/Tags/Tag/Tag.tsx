import { useId, useState } from 'react'
import { useBooksStore } from '../../../../hooks/useBooksStore'

type TagProps = {
  value: string
}

export default function Tag({ value }: TagProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const id = useId()
  const checkboxId = `${id}-${value}`

  const settings = useBooksStore((state) => state.settings)
  const setSettings = useBooksStore((state) => state.setSettings)

  function handleChange() {
    setChecked(!checked)
    let newTags = [...settings.tags]
    if (newTags.includes(value)) {
      newTags = newTags.filter((tag) => tag !== value)
    } else {
      newTags = [...settings.tags, value]
    }
    setSettings({ ...settings, tags: newTags })
  }

  return (
    <div className='tag-box'>
      <input
        checked={checked}
        onChange={handleChange}
        type='checkbox'
        value={value}
        id={checkboxId}
        className='tag'
      />
      <label className='tag-label' htmlFor={checkboxId}>
        {value}
      </label>
    </div>
  )
}
