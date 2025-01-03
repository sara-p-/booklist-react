import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import headerStyles from './MobileHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useActiveMobilePanelStore } from '../../../hooks/Zustand/useActiveMobilePanelStore'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'

interface MobileHeaderProps {
  title: string
}

export default function MobileHeader({ title }: MobileHeaderProps) {
  // Get the setActivePanel function from the Zustand store so we can set the active panel to null when the back button is clicked
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )
  // If the header is the 'options' header, we need to close the mobile menu when the back button is clicked
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)
  const icon = title === 'options' ? faXmark : faArrowLeft

  function handleOnClick() {
    if (title === 'options') {
      setIsActive(false)
    } else {
      setActivePanel('options')
    }
  }

  return (
    <div className={headerStyles.header}>
      <button className={headerStyles.button} onClick={handleOnClick}>
        <FontAwesomeIcon icon={icon} className={headerStyles.icon} />
      </button>
      <h2 className={headerStyles.title}>{title}</h2>
    </div>
  )
}
