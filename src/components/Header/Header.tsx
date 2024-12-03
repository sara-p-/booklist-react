import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMobileMenuClassStore } from '../../hooks/Zustand/useMobileMenuClassStore'

export default function Header() {
  // Set the isActive state for the mobile menu
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)

  return (
    <header>
      <div className='title-box'>
        <h1 className='title'>
          <FontAwesomeIcon className='icon' icon={faBook} /> Booklist
        </h1>
        <button
          className='mobile-menu-button'
          onClick={() => setIsActive(true)}
        >
          <FontAwesomeIcon className='mobile-menu-icon' icon={faBars} />
        </button>
      </div>
    </header>
  )
}
