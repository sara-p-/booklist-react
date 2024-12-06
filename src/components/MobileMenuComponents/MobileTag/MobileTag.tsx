import { useId } from 'react'
import tagStyles from './MobileTag.module.css'

type MobileTagProps = {
  tag: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MobileTag({ tag, checked, onChange }: MobileTagProps) {
  const id = useId()
  const tagId = `${id}-${tag}`
  return (
    <div className={tagStyles.tagBox}>
      <input
        id={tagId}
        type='checkbox'
        className={tagStyles.tag}
        value={tag}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={tagId} className={tagStyles.label}>
        {tag}
      </label>
    </div>
  )
}
