import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import {
  DEFAULT_VALUES,
  DefaultValuesType,
  BookType,
} from './global/global-variables'
import useBookData from './hooks/UseBookData'
import { updateBookList } from './utils/update-book-list'
import Book from './components/Main/Book/Book'

function App() {
  const [bookSettings, setBookSettings] =
    useState<DefaultValuesType>(DEFAULT_VALUES)
  const [contentClass, setContentClass] = useState<
    'content grid' | 'content list'
  >('content grid')
  const { data } = useBookData('../../api/booklist.json')

  // Update the bookSettings state
  function handleValueChange(value: string | boolean, key: string): void {
    const newValue = { ...bookSettings, [key]: value }
    setBookSettings(newValue)
    setContentClass(newValue.view ? 'content list' : 'content grid')
  }

  // Update the bookList based on the settings
  const bookList = data ? updateBookList(data, bookSettings) : []

  return (
    <div className='box'>
      <Sidebar handleValueChange={handleValueChange} />
      <div className='main'>
        <div className='wrapper'>
          <div className={contentClass}>
            {bookList &&
              bookList.map((book: BookType) => (
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
