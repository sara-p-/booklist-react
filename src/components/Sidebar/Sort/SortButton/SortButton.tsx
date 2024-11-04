import './SortButton.css'

type SortButtonProps = {
  label: string
  sortId: string
}

export default function SortButton({ label, sortId }: SortButtonProps) {
  return (
    <div className='sort-box'>
      <input type='radio' id={sortId} />
      <label htmlFor={sortId}>{`Sort by ${label}`}</label>
    </div>
  )
}
