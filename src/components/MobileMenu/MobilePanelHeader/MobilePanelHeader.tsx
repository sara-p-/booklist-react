import headerStyles from './MobilePanelHeader.module.css'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MobilePanelHeaderProps = {
  title: string
  onClick: () => void
}

export function MobilePanelHeader({ title, onClick }: MobilePanelHeaderProps) {
  return (
    <div className={headerStyles.header}>
      <button className={headerStyles.button} onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} className={headerStyles.icon} />
      </button>
      <h2 className={headerStyles.title}>{title}</h2>
    </div>
  )
}
