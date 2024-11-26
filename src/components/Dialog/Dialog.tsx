import styles from './Dialog.module.css'
import DialogButton from './DialogButton/DialogButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { BookType } from '../../global/types'
import { BookContent } from '../BookContent/BookContent'
import { createImageUrl, getNextBook } from '../../utils/utilities'
import { useUpdateBooksStore } from '../../hooks/Zustand/useUpdateBookStore'
import { useCurrentBookStore } from '../../hooks/Zustand/useCurrentBookStore'
import { filterDescription } from '../../utils/filter-utils'

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
    <dialog className={styles.dialog} ref={dialogRef}>
      <div className={styles.dialogWrapper}>
        <DialogButton
          label='Previous book'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          direction='previous'
          onClick={() => getNextBook('previous', bookId, books, setCurrentBook)}
        />
        <div className={styles.item}>
          <div className={styles.itemWrapper}>
            <div className={styles.titleRow}>
              <img
                className={styles.image}
                src={book && createImageUrl(book.title)}
                alt={book ? `Book cover of ${book.title}` : 'Book cover'}
              />
              <BookContent book={book} />
              <button
                className={styles.closeButton}
                onClick={() => dialogRef.current?.close()}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className={styles.descriptionRow}>
              <div className={styles.tagsBox}>
                <h4 className={styles.tagsHeading}>
                  <strong>tags:</strong>
                </h4>
                <p className={styles.tags}>{book.tags}</p>
              </div>
              <div className={styles.description}>
                <h4 className={styles.descriptionHeading}>
                  <strong>description:</strong>
                </h4>
                {book.description &&
                  filterDescription(book.description).map((p, index) => (
                    // if the paragraph has <strong> tags, wrap the text in a <strong> tag
                    <p key={index}>
                      {p.includes('<strong>') ? (
                        <strong>
                          {p
                            .replace(/<strong>/g, '')
                            .replace(/<\/strong>/g, '')}
                        </strong>
                      ) : (
                        p
                      )}
                    </p>
                  ))}
              </div>
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
