import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
// import Dialog from './components/Dialog/Dialog'
// import useDialogData from './hooks/useDialogData'

import Main from './components/Main/Main'
import { useRef } from 'react'
// import { useDialogRefStore } from './hooks/Zustand/useDialogRefStore'
import MobileMenu from './components/MobileMenu/MobileMenu/MobileMenu'

function App() {
  // Create a ref for the mobile Menu
  const menuRef = useRef<HTMLDivElement>(null)
  // Create a ref for the dialog
  // const dialogRef = useRef<HTMLDialogElement>(null)

  // Get the the current book from the useDialogData hook
  // const { currentBook } = useDialogData()
  // Set the dialogRef in the Zustand store
  // const setDialogRef = useDialogRefStore((state) => state.setDialogRef)
  // setDialogRef(dialogRef)

  // Create the function to open the mobile menu
  function handleMobileMenuClick() {
    menuRef.current?.classList.toggle('active')
    console.log(menuRef.current)
  }

  return (
    <div className='box'>
      <Sidebar handleMobileMenuClick={handleMobileMenuClick} />
      <Main />
      {/* <Dialog ref={dialogRef} bookId={currentBook} /> */}
      <MobileMenu ref={menuRef} />
    </div>
  )
}

export default App
