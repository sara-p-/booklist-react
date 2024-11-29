import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars } from '@fortawesome/free-solid-svg-icons'

type HeaderProps = {
  handleMobileMenuClick: () => void
}

export default function Header({ handleMobileMenuClick }: HeaderProps) {
  return (
    <header>
      <div className='title-box'>
        <h1 className='title'>
          <FontAwesomeIcon className='icon' icon={faBook} /> Booklist
        </h1>
        <button className='mobile-menu-button' onClick={handleMobileMenuClick}>
          <FontAwesomeIcon className='mobile-menu-icon' icon={faBars} />
        </button>
      </div>
    </header>
  )
}
