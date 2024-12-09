import headerStyles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMobileMenuClassStore } from '../../hooks/Zustand/useMobileMenuClassStore'
import { useActiveMobilePanelStore } from '../../hooks/Zustand/useActiveMobilePanelStore'

export default function Header() {
  // Set the isActive state for the mobile menu
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)
  // We also need to set the current active panel to the 'options' panel
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )

  function handleMenuButtonClick() {
    setIsActive(true)
    setActivePanel('options')
  }

  return (
    <header>
      <div className={headerStyles.titleBox}>
        <h1 className={headerStyles.title}>
          <FontAwesomeIcon className='icon' icon={faBook} /> Booklist
        </h1>
        <button className={headerStyles.button} onClick={handleMenuButtonClick}>
          <FontAwesomeIcon className='mobile-menu-icon' icon={faBars} />
        </button>
      </div>
    </header>
  )
}
