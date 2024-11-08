import { createImageUrl } from '../../../utils/utilities'
import './Book.css'

type BookProps = {
  title: string
  author: string
  series: string
  number: string
  year: string
  length: string
  rating: string
}

export default function Book({
  title,
  author,
  series,
  number,
  year,
  length,
  rating,
}: BookProps) {
  return (
    <button className='book-button'>
      <div className='book-wrapper'>
        <img
          className='book-image'
          src={createImageUrl(title)}
          alt={`Book cover of ${title}`}
        />
        <div className='book-content'>
          <div className='book-info'>
            <h3 className='book-title'>{title}</h3>
            <h4 className='book-author'>{author}</h4>
            <hr className='book-divider' />
            <p
              className='book-info-item book-series active'
              data-label='series'
            >
              <strong>Series:</strong> {series}
            </p>
            <p
              className='book-info-item book-number active'
              data-label='number'
            >
              <strong>Book #:</strong> {number}
            </p>
            <p className='book-info-item book-year' data-label='year'>
              <strong>Published:</strong> {year}
            </p>
            <p className='book-info-item book-length' data-label='length'>
              <strong>Length:</strong> {length} pages
            </p>
            <p className='book-info-item book-rating-item' data-label='rating'>
              <strong>Rating:</strong> {rating} / 10
            </p>
          </div>
          <div className='book-rating'>
            <h4 className='h1 book-rating-title'>{rating} / 10</h4>
          </div>
        </div>
      </div>
    </button>
  )
}
