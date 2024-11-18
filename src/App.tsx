import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Book from './components/Main/Book/Book'
import { BookType } from './global/types'
import Dialog from './components/Dialog/Dialog'
import useBookInfo from './hooks/useBookInfo'
import useDialogData from './hooks/useDialogData'
import { useContentClassStore } from './hooks/useContentClassStore'

function App() {
  // Get the updated book data object from the useBookInfo hook
  const { books } = useBookInfo()
  // Get the content class from the Zustand store
  const contentClass = useContentClassStore((state) => state.contentClass)
  // Get the the info from the useDialogData hook
  const { dialogRef, handleOpenDialog, currentBook } = useDialogData()

  return (
    <div className='box'>
      <Sidebar />
      <div className='main'>
        <div className='wrapper'>
          <div className={contentClass}>
            {books &&
              books.map((book: BookType) => (
                <Book
                  key={book.id}
                  book={book}
                  handleOpenDialog={() => handleOpenDialog(book.id)}
                />
              ))}
          </div>
        </div>
      </div>
      <Dialog ref={dialogRef} bookId={currentBook} />
    </div>
  )
}

export default App
