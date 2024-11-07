import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import {
  DEFAULT_VALUES,
  DefaultValuesType,
  BookType,
} from './global/global-variables'
import useBookData from './hooks/UseBookData'
import { updateBookList } from './utils/books'
import Book from './components/Main/Book/Book'

function App() {
  const [bookSettings, setBookSettings] =
    useState<DefaultValuesType>(DEFAULT_VALUES)
  const { data } = useBookData('../../api/booklist.json')

  function handleValueChange(value: string | boolean, key: string): void {
    const newValue = { ...bookSettings, [key]: value }
    setBookSettings(newValue)
  }

  // Update the bookList based on the settings
  const bookList = data ? updateBookList(data, bookSettings) : []

  return (
    <div className='box'>
      <Sidebar handleValueChange={handleValueChange} />
      <div className='main'>
        <div className='wrapper'>
          <div className='content'>
            {bookList &&
              bookList.map((book: BookType) => (
                <Book key={book.id} title={book.title} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
