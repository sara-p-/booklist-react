import './Book.css'
import { createImageUrl } from '../../../utils/utilities'
import { BookContent } from './BookContent'
import { BookType } from '../../../global/types'
// import { useCurrentBookStore } from '../../../hooks/useCurrentBookStore'

type BookProps = {
  book: BookType
  handleOpenDialog: () => void
}

export default function Book({ book, handleOpenDialog }: BookProps) {
  // const currentBook = useCurrentBookStore((state) => state.currentBook)
  // const setCurrentBook = useCurrentBookStore((state) => state.setCurrentBook)

  return (
    <button
      className='book-button'
      data-id={book.id}
      onClick={handleOpenDialog}
    >
      <div className='book-wrapper'>
        <img
          className='book-image'
          src={createImageUrl(book.title)}
          alt={`Book cover of ${book.title}`}
        />
        <BookContent book={book} />
        <h4 className='h1 book-rating'>{book.rating} / 10</h4>
      </div>
    </button>
  )
}
