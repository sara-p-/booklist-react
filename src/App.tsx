import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'

function App() {
  const [bookValue, setBookValue] = useState<{
    theme: string
    view: string
    order: string
    sort: string
  }>({ theme: 'light', view: 'grid', order: 'asc', sort: 'series' })

  function handleBookValueChange(value: string, key: string): void {
    const newValue = { ...bookValue }
    newValue[key as keyof typeof newValue] = value
    setBookValue(newValue)
    console.log(newValue)
  }

  return (
    <div className='box'>
      <Sidebar handleBookValueChange={handleBookValueChange} />
      <div className='main'></div>
    </div>
  )
}

export default App
