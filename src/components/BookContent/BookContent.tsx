import styles from './BookContent.module.css'
import bookStyles from '../Book/Book.module.css'
import { useEffect, useState } from 'react'
import { BookType } from '../../global/types'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'

type BookContentProps = {
  book: BookType
}

export function BookContent({ book }: BookContentProps) {
  const [contentClass, setContentClass] = useState('')
  // Pull the sort settings from the Zustand Settings store
  const sortSettings = useSettingsStore((state) => state.settings.sort)

  // Set the content class based on the selected sort option
  useEffect(() => {
    setContentClass(`sort-${sortSettings}`)
    console.log(contentClass)
  }, [sortSettings, contentClass])

  return (
    <div
      className={`${bookStyles.content} ${styles.content} ${styles[contentClass]}`}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{book.title}</h3>
        <h4 className={styles.author}>{book.author}</h4>
        <hr className={styles.divider} />
        <p
          className={`${styles.infoItem} ${styles.series}`}
          data-label='series'
        >
          <strong>series:</strong> {book.series}
        </p>
        <p
          className={`${styles.infoItem} ${styles.number}`}
          data-label='number'
        >
          <strong>book #:</strong> {book.number}
        </p>
        <p className={`${styles.infoItem} ${styles.year}`} data-label='year'>
          <strong>year:</strong> {book.year}
        </p>
        <p
          className={`${styles.infoItem} ${styles.length}`}
          data-label='length'
        >
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
