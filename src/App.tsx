import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Book from './components/Main/Book/Book'
import { BookType } from './global/types'
import Dialog from './components/Dialog/Dialog'
import useBookInfo from './hooks/useBookInfo'
import useDialogData from './hooks/useDialogData'
import { useContentClassStore } from './hooks/Zustand/useContentClassStore'
import { Fragment } from 'react'
import useListHeadings from './hooks/useListHeadings'
import MobileMenu from './components/MobileMenu/MobileMenu/MobileMenu'

function App() {
  // Get the updated book data object from the useBookInfo hook
  const { books } = useBookInfo()
  // Get the content class from the Zustand store
  const contentClass = useContentClassStore((state) => state.contentClass)
  // Get the the info from the useDialogData hook
  const { dialogRef, handleOpenDialog, currentBook } = useDialogData()
  // Get the list headings to use in List View from the useListHeadings hook
  const { listHeadings, sortSetting } = useListHeadings(books)

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
                        {sortSetting === 'rating' && '/10'}
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
      <MobileMenu />
    </div>
  )
}

export default App
