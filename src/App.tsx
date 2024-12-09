import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
// import Dialog from './components/Dialog/Dialog'
// import useDialogData from './hooks/useDialogData'

import Main from './components/Main/Main'
// import { useDialogRefStore } from './hooks/Zustand/useDialogRefStore'
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'

function App() {
  // Create a state for the menu active class
  // Create a ref for the dialog
  // const dialogRef = useRef<HTMLDialogElement>(null)

  // Get the the current book from the useDialogData hook
  // const { currentBook } = useDialogData()
  // Set the dialogRef in the Zustand store
  // const setDialogRef = useDialogRefStore((state) => state.setDialogRef)
  // setDialogRef(dialogRef)

  return (
    <div className='box'>
      <Header />
      <Sidebar />
      <Main />
      {/* <Dialog ref={dialogRef} bookId={currentBook} /> */}
      {/* <MobileMenu /> */}
      <MobileMenu />
    </div>
  )
}

export default App
