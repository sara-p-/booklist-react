import styles from './BookContent.module.css'
import bookStyles from '../Book/Book.module.css'
import { useEffect, useState } from 'react'
import { BookType } from '../../global/types'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'

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
    <div className={`${bookStyles.content} ${styles.content}`}>
      <div className={styles.info}>
        <h3 className={styles.title}>{book.title}</h3>
        <h4 className='book-author'>{book.author}</h4>
        <hr className={styles.divider} />
        <p className={`${styles.infoItem}`} data-label='series'>
          <strong>series:</strong> {book.series}
        </p>
        <p className={`${styles.infoItem}`} data-label='number'>
          <strong>book #:</strong> {book.number}
        </p>
        <p className={`${styles.infoItem} ${yearClass}`} data-label='year'>
          <strong>year:</strong> {book.year}
        </p>
        <p className={`${styles.infoItem} ${lengthClass}`} data-label='length'>
          <strong>length:</strong> {book.length} pages
        </p>
        <p
          className={`${styles.infoItem} ${styles.rating}`}
          data-label='rating'
        >
          <strong>rating:</strong> {book.rating}/10
        </p>
      </div>
    </div>
  )
}
