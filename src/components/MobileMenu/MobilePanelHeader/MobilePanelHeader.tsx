import headerStyles from './MobilePanelHeader.module.css'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useActiveMobilePanelStore } from '../../../hooks/Zustand/useActiveMobilePanelStore'

type MobilePanelHeaderProps = {
  title: string
  onClick?: () => void | undefined
}

export function MobilePanelHeader({ title, onClick }: MobilePanelHeaderProps) {
  // Get the setActivePanel function from the Zustand store so we can set the active panel to null when the back button is clicked for the default onClick
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )

  function handleBackButtonClick() {
    if (onClick) {
      onClick()
    } else {
      setActivePanel(null)
    }
  }

  return (
    <div className={headerStyles.header}>
      <button className={headerStyles.button} onClick={handleBackButtonClick}>
        <FontAwesomeIcon icon={faArrowLeft} className={headerStyles.icon} />
      </button>
      <h2 className={headerStyles.title}>{title}</h2>
    </div>
  )
}
