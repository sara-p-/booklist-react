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
import { createImageUrl, getNextBook } from '../../utils/utilities'
import { useUpdateBooksStore } from '../../hooks/useUpdateBookStore'
import { useCurrentBookStore } from '../../hooks/useCurrentBookStore'

type DialogProps = {
  bookId: string
}

const Dialog = forwardRef(({ bookId }: DialogProps, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  //get the setter for the current book in the store
  const setCurrentBook = useCurrentBookStore((state) => state.setCurrentBook)
  // grab the book from the bookId by finding it in the books array
  const books: BookType[] = useUpdateBooksStore((state) => state.books)
  const book = books.find((book) => book.id === bookId)

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    showModal: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }))

  if (!book) return null

  return (
    <dialog className='dialog' ref={dialogRef}>
      <div className='dialog-wrapper'>
        <DialogButton
          label='Previous book'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          direction='previous'
          onClick={() => getNextBook('previous', bookId, books, setCurrentBook)}
        />
        <div className='dialog-item'>
          <div className='dialog-item-wrapper'>
            <div className='dialog-title-row'>
              <img
                className='dialog-image'
                src={book && createImageUrl(book.title)}
                alt={book ? `Book cover of ${book.title}` : 'Book cover'}
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
          onClick={() => getNextBook('next', bookId, books, setCurrentBook)}
        />
      </div>
    </dialog>
  )
})

export default Dialog
