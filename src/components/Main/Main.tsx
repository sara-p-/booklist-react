import mainStyles from './Main.module.css'
import { Fragment } from 'react/jsx-runtime'
import Book from '../Book/Book'
import { useListClassStore } from '../../hooks/Zustand/useListClassStore'
import useListHeadings from '../../hooks/useListHeadings'
import useDialogData from '../../hooks/useDialogData'
import useBookInfo from '../../hooks/useBookInfo'
import ListHeading from '../ListHeading/ListHeading'
import { BookType } from '../../global/types'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Main() {
  const [contentClass, setContentClass] = useState('grid')
  // Get the updated book data object from the useBookInfo hook
  const { books } = useBookInfo()
  // Get the content class from the Zustand store
  const listClass = useListClassStore((state) => state.listClass)
  // Get the the info from the useDialogData hook
  const { handleOpenDialog } = useDialogData()
  // Get the list headings to use in List View from the useListHeadings hook
  const { listHeadings } = useListHeadings(books)

  // set the content class from the Zustand store
  useEffect(() => {
    setContentClass(listClass ? 'list' : 'grid')
  }, [listClass])

  return (
    <div className={mainStyles.main}>
      <div className={mainStyles.wrapper}>
        <div className={`${mainStyles.content} ${mainStyles[contentClass]}`}>
          {books &&
            books.map((book: BookType) => {
              if (listHeadings.find((heading) => heading.id === book.id)) {
                return (
                  <Fragment key={book.id}>
                    <ListHeading book={book} />
                    <Book
                      book={book}
                      handleOpenDialog={() => handleOpenDialog(book.id)}
                    />
                  </Fragment>
                )
              } else {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    handleOpenDialog={() => handleOpenDialog(book.id)}
                  />
                )
              }
            })}
        </div>
      </div>
    </div>
  )
}
