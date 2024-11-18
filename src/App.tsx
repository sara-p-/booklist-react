import { useEffect, useRef } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Book from './components/Main/Book/Book'
import { useBooksStore } from './hooks/useBooksStore'
import useBookData from './hooks/useBookData'
import { BookType } from './global/types'
import { useSettingsStore } from './hooks/useSettingsStore'
import { useDataStore } from './hooks/useDataStore'
import { useContentClassStore } from './hooks/useContentClassStore'
import { useResetButtonStore } from './hooks/useResetButtonStore'
import Dialog from './components/Dialog/Dialog'
import { useCurrentBookStore } from './hooks/useCurrentBookStore'

function App() {
  // Get the book data object
  const { data } = useBookData('../../api/booklist.json')
  // Get the book object from the Zustand store
  const books = useBooksStore((state) => state.books)
  const setBooks = useBooksStore((state) => state.setBooks)
  // Get the settings object from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setData = useDataStore((state) => state.setData)
  // Get the content class from the Zustand store
  const contentClass = useContentClassStore((state) => state.contentClass)
  // Get the reset button state
  const resetButton = useResetButtonStore((state) => state.resetButton)
  const setResetButton = useResetButtonStore((state) => state.setResetButton)
  // Get the current book from the Zustand store (to use in the dialog)
  const currentBook = useCurrentBookStore((state) => state.currentBook)
  const setCurrentBook = useCurrentBookStore((state) => state.setCurrentBook)

  // Function to open the dialog and pass it the current book
  const dialogRef = useRef<HTMLDialogElement>(null)
  const handleOpenDialog = (bookId: string) => {
    dialogRef.current?.showModal()
    setCurrentBook(bookId)
  }

  // Store the book data in the Zustand store
  useEffect(() => {
    let isMounted = true
    if (isMounted && data) {
      setBooks(data, settings)
      setData(data)
    }
    if (isMounted && resetButton) {
      setBooks(data, settings)
      setResetButton(false)
    }
    return () => {
      isMounted = false
    }
  }, [data, setBooks, settings, setData, resetButton, setResetButton])

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
