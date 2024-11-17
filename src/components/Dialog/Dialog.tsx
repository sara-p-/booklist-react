import './Dialog.css'
import DialogButton from './DialogButton/DialogButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Dialog() {
  return (
    <dialog className='dialog'>
      <div className='dialog-wrapper'>
        <DialogButton
          label='Previous book'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          direction='previous'
        />
        <DialogButton
          label='Next book'
          icon={<FontAwesomeIcon icon={faChevronRight} />}
          direction='next'
        />
      </div>
    </dialog>
  )
}
