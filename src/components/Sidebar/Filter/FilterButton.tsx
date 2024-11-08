import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type FilterButtonProps = {
  label: string
  toggleActive: () => void
  isActive: boolean
}

export default function FilterButton({
  label,
  toggleActive,
  isActive,
}: FilterButtonProps) {
  return (
    <button className='filter-button' onClick={toggleActive}>
      <span className='filter-button-box'>
        <span className='filter-button-value'>{label}</span>
        {isActive ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </span>
    </button>
  )
}
