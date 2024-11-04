import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <div className='title-box'>
        <h1 className='title'>
          <FontAwesomeIcon className='icon' icon={faBook} /> Booklist
        </h1>
        <button className='mobile-menu-button'>
          <FontAwesomeIcon className='mobile-menu-icon' icon={faBars} />
        </button>
      </div>
    </header>
  )
}
