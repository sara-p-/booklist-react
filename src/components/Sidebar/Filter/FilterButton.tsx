import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterLabel from './FilterLabel'

type FilterButtonProps = {
  label: string
  value: string
  handleButtonClick: () => void
  isActive: boolean
}

export default function FilterButton({
  label,
  value,
  handleButtonClick,
  isActive,
}: FilterButtonProps) {
  return (
    <button className='filter-button' onClick={handleButtonClick}>
      <span className='filter-button-box'>
        <FilterLabel label={label} value={value} />
        {isActive ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </span>
    </button>
  )
}
