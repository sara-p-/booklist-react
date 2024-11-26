import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Dialog from './components/Dialog/Dialog'
import useDialogData from './hooks/useDialogData'

import Main from './components/Main/Main'
import { useRef } from 'react'
import { useDialogRefStore } from './hooks/Zustand/useDialogRefStore'

function App() {
  // Create a ref for the dialog
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Get the the current book from the useDialogData hook
  const { currentBook } = useDialogData()
  // Set the dialogRef in the Zustand store
  const setDialogRef = useDialogRefStore((state) => state.setDialogRef)
  setDialogRef(dialogRef)

  return (
    <div className='box'>
      <Sidebar />
      <Main />
      <Dialog ref={dialogRef} bookId={currentBook} />
      {/* <MobileMenu /> */}
    </div>
  )
}

export default App
