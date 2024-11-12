import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
// import { updateBookList } from './utils/update-book-list'
import Book from './components/Main/Book/Book'
import { useBooksStore } from './hooks/useBooksStore'
import useBookData from './hooks/useBookData'
// import { useSettingsStore } from './hooks/useSettingsStore'
import { BookType } from './global/types'

function App() {
  const [contentClass, setContentClass] = useState<
    'content grid' | 'content list'
  >('content grid')
  // Get the book data object
  const { data } = useBookData('../../api/booklist.json')
  // Get the book object from the Zustand store
  // const setBooks = useBooksStore((state) => state.setBooks)
  const books = useBooksStore((state) => state.books)
  const setBooks = useBooksStore((state) => state.setBooks)
  const settings = useBooksStore((state) => state.settings)
  const setSettings = useBooksStore((state) => state.setSettings)
  // Get the settings from the Zustand store
  // const setSettings = useSettingsStore((state) => state.setSettings)
  // const settings = useSettingsStore((state) => state.settings)

  // function to update the settings
  function handleValueChange(value: string | boolean, key: string): void {
    const newValue = { ...settings, [key]: value }
    setSettings(newValue)
    setContentClass(newValue.view ? 'content list' : 'content grid')
  }

  // Store the book data in the Zustand store
  useEffect(() => {
    if (data) {
      // setBooks(data)
      setBooks(data, settings)
      // console.log({ data })
    }
  }, [data, setBooks, settings])

  return (
    <div className='box'>
      <Sidebar handleValueChange={handleValueChange} />
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
