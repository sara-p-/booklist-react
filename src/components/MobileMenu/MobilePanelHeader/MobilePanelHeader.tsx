import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MobilePanelHeaderProps = {
  title: string
  onClick: () => void
}

export function MobilePanelHeader({ title, onClick }: MobilePanelHeaderProps) {
  return (
    <div className='mobile-panel-header'>
      <button className='back-button' onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} className='icon' />
      </button>
      <h2 className='title'>{title}</h2>
    </div>
  )
}
