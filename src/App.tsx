import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import { DEFAULT_VALUES, DefaultValuesType } from './global/global-variables'
import useBookData from './hooks/UseBookData'

function App() {
  const [bookValue, setBookValue] = useState<DefaultValuesType>(DEFAULT_VALUES)
  const { data, isLoading, error } = useBookData('/booklist.json')

  console.log({ data })

  function handleValueChange(value: string | boolean, key: string): void {
    const newValue = { ...bookValue, [key]: value }
    setBookValue(newValue)
    console.log(newValue)
  }

  return (
    <div className='box'>
      <Sidebar handleValueChange={handleValueChange} />
      <div className='main'></div>
      <img src={'/book_a-soul-to-keep.jpg'} alt='' />
    </div>
  )
}

export default App
