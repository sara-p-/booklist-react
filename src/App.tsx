import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Book from './components/Main/Book/Book'
import { BookType } from './global/types'
import Dialog from './components/Dialog/Dialog'
import useBookInfo from './hooks/useBookInfo'
import useDialogData from './hooks/useDialogData'
import { useContentClassStore } from './hooks/Zustand/useContentClassStore'
import { useListHeadingStore } from './hooks/Zustand/useListHeadingStore'
import { useSettingsStore } from './hooks/Zustand/useSettingsStore'
import { Fragment, useEffect } from 'react'
import { filterListHeadings } from './utils/filter-utils'

function App() {
  // // get the list headings from the useListHeadingStore hook
  const setListHeadings = useListHeadingStore((state) => state.setListHeadings)
  const listHeadings = useListHeadingStore((state) => state.listHeadings)

  // Get the updated book data object from the useBookInfo hook
  const { books } = useBookInfo()
  // Get the content class from the Zustand store
  const contentClass = useContentClassStore((state) => state.contentClass)
  // Get the the info from the useDialogData hook
  const { dialogRef, handleOpenDialog, currentBook } = useDialogData()
  // Get the settings from the Zustand store
  const sortSetting = useSettingsStore((state) => state.settings.sort)

  // Set the list headings when the sort setting changes
  useEffect(() => {
    setListHeadings(filterListHeadings(books, sortSetting))
  }, [sortSetting, books, setListHeadings])

  return (
    <div className='box'>
      <Sidebar />
      <div className='main'>
        <div className='wrapper'>
          <div className={contentClass}>
            {books &&
              books.map((book: BookType) => {
                if (listHeadings.find((heading) => heading.id === book.id)) {
                  return (
                    <Fragment key={book.id}>
                      <p className='list-heading'>
                        {sortSetting}: {book[sortSetting as keyof BookType]}
                      </p>
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
      <Dialog ref={dialogRef} bookId={currentBook} />
    </div>
  )
}

export default App
