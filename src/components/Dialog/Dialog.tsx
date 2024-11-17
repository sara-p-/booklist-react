import './Dialog.css'
import DialogButton from './DialogButton/DialogButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { BookType } from '../../global/types'
import { BookContent } from '../Main/Book/BookContent'
import { createImageUrl } from '../../utils/utilities'

const Dialog = forwardRef(({ book }: { book: BookType }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }))

  return (
    <dialog className='dialog' ref={dialogRef}>
      <div className='dialog-wrapper'>
        <DialogButton
          label='Previous book'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          direction='previous'
        />
        <div className='dialog-item'>
          <div className='dialog-item-wrapper'>
            <div className='dialog-title-row'>
              <img
                className='dialog-image'
                src={createImageUrl(book.title)}
                alt={`Book cover of ${book.title}`}
              />
              <BookContent book={book} />
              <button
                className='dialog-close-button'
                onClick={() => dialogRef.current?.close()}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className='dialog-description-row'>
              <div className='dialog-tags-box'>
                <p className='dialog-tags'>
                  <strong>tags:</strong> {book.tags}
                </p>
              </div>
              <div className='dialog-description'>{book.description}</div>
            </div>
          </div>
        </div>
        <DialogButton
          label='Next book'
          icon={<FontAwesomeIcon icon={faChevronRight} />}
          direction='next'
        />
      </div>
    </dialog>
  )
})

export default Dialog
