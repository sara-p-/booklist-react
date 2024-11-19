import './Book.css'
import { createImageUrl } from '../../../utils/utilities'
import { BookContent } from './BookContent'
import { BookType } from '../../../global/types'
// import useBookInfo from '../../../hooks/useBookInfo'
import { useListHeadings } from '../../../hooks/useListHeadings'
import { useSettingsStore } from '../../../hooks/useSettingsStore'

type BookProps = {
  book: BookType
  handleOpenDialog: () => void
}

export default function Book({ book, handleOpenDialog }: BookProps) {
  // grab the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  // grab the list headings
  const listHeadings = useListHeadings()

  return (
    <>
      {listHeadings.find((b) => b.id === book.id) && (
        <p className='list-heading'>series: {book.series}</p>
      )}
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
    </>
  )
}
