import { useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Book from './components/Main/Book/Book'
import { useBooksStore } from './hooks/useBooksStore'
import useBookData from './hooks/useBookData'
import { BookType } from './global/types'

function App() {
  // Get the book data object
  const { data } = useBookData('../../api/booklist.json')
  // Get the book object from the Zustand store
  const books = useBooksStore((state) => state.books)
  const setBooks = useBooksStore((state) => state.setBooks)
  const settings = useBooksStore((state) => state.settings)
  // const setSettings = useBooksStore((state) => state.setSettings)
  const contentClass = useBooksStore((state) => state.contentClass)

  // Store the book data in the Zustand store
  useEffect(() => {
    let isMounted = true
    if (isMounted && data) {
      setBooks(data, settings)
    }
    return () => {
      isMounted = false
    }
  }, [data, setBooks, settings])

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
                  title={book.title}
                  author={book.author}
                  series={book.series}
                  number={book.number}
                  year={book.year}
                  length={book.length}
                  rating={book.rating}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
