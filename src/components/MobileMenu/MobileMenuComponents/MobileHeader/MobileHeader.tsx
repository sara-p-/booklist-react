import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import headerStyles from './MobileHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useActiveMobilePanelStore } from '../../../../hooks/Zustand/useActiveMobilePanelStore'

interface MobileHeaderProps {
  title: string
  onClick?: () => void
}

export default function MobileHeader({ title, onClick }: MobileHeaderProps) {
  // Get the setActivePanel function from the Zustand store so we can set the active panel to null when the back button is clicked
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )

  // Unless specified, the onClick Function will set the active panel to null
  function handleOnClick() {
    if (!onClick) {
      setActivePanel(null)
    } else {
      onClick()
    }
  }

  return (
    <div className={headerStyles.header}>
      <button className={headerStyles.button} onClick={handleOnClick}>
        <FontAwesomeIcon icon={faArrowLeft} className={headerStyles.icon} />
      </button>
      <h2 className={headerStyles.title}>{title}</h2>
    </div>
  )
}
