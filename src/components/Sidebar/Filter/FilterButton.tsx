import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type FilterButtonProps = {
  label: string
  handleButtonClick: () => void
  isActive: boolean
}

export default function FilterButton({
  label,
  handleButtonClick,
  isActive,
}: FilterButtonProps) {
  return (
    <button className='filter-button' onClick={handleButtonClick}>
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
