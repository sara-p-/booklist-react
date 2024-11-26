import styles from './Book.module.css'
import { createImageUrl } from '../../utils/utilities'
import { BookContent } from '../BookContent/BookContent'
import { BookType } from '../../global/types'
import { useListClassStore } from '../../hooks/Zustand/useListClassStore'

type BookProps = {
  book: BookType
  handleOpenDialog: () => void
}

export default function Book({ book, handleOpenDialog }: BookProps) {
  const { listClass } = useListClassStore((state) => state)
  return (
    <button
      className={`${listClass ? styles.list : ''} ${styles.button} `}
      data-id={book.id}
      onClick={handleOpenDialog}
    >
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={createImageUrl(book.title)}
          alt={`Book cover of ${book.title}`}
        />
        <BookContent book={book} />
        <h4 className={`${styles.rating} h1`}>{book.rating}/10</h4>
      </div>
    </button>
  )
}
