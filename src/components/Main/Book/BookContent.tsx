import { BookType } from '../../../global/types'

type BookContentProps = {
  book: BookType
}

export function BookContent({ book }: BookContentProps) {
  return (
    <div className='book-content'>
      <div className='book-info'>
        <h3 className='book-title'>{book.title}</h3>
        <h4 className='book-author'>{book.author}</h4>
        <hr className='book-divider' />
        <p className='book-info-item book-series active' data-label='series'>
          <strong>Series:</strong> {book.series}
        </p>
        <p className='book-info-item book-number active' data-label='number'>
          <strong>Book #:</strong> {book.number}
        </p>
        <p className='book-info-item book-year' data-label='year'>
          <strong>Published:</strong> {book.year}
        </p>
        <p className='book-info-item book-length' data-label='length'>
          <strong>Length:</strong> {book.length} pages
        </p>
        <p className='book-info-item book-rating' data-label='rating'>
          <strong>Rating:</strong> {book.rating} / 10
        </p>
      </div>
    </div>
  )
}
