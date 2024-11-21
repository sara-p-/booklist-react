import { useEffect, useState } from 'react'
import { BookType } from '../../../global/types'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'

type BookContentProps = {
  book: BookType
}

export function BookContent({ book }: BookContentProps) {
  const [lengthClass, setLengthClass] = useState('')
  const [yearClass, setYearClass] = useState('')
  // Pull the sort settings from the Zustand Settings store
  const sortSettings = useSettingsStore((state) => state.settings.sort)
  // When the sort setting updates to length, show that item in the book List View
  useEffect(() => {
    if (sortSettings === 'length') {
      setLengthClass('active')
    } else {
      setLengthClass('')
    }
    if (sortSettings === 'year') {
      setYearClass('active')
    } else {
      setYearClass('')
    }
  }, [sortSettings])

  return (
    <div className='book-content'>
      <div className='book-info'>
        <h3 className='book-title'>{book.title}</h3>
        <h4 className='book-author'>{book.author}</h4>
        <hr className='book-divider' />
        <p className='book-info-item book-series active' data-label='series'>
          <strong>series:</strong> {book.series}
        </p>
        <p className='book-info-item book-number active' data-label='number'>
          <strong>book #:</strong> {book.number}
        </p>
        <p
          className={`book-info-item book-year ${yearClass}`}
          data-label='year'
        >
          <strong>year:</strong> {book.year}
        </p>
        <p
          className={`book-info-item book-length ${lengthClass}`}
          data-label='length'
        >
          <strong>length:</strong> {book.length} pages
        </p>
        <p className='book-info-item book-rating' data-label='rating'>
          <strong>rating:</strong> {book.rating} / 10
        </p>
      </div>
    </div>
  )
}
