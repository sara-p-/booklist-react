import './App.css'
import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Dialog from './components/Dialog/Dialog'
import useDialogData from './hooks/useDialogData'

import Main from './components/Main/Main'

function App() {
  // Get the the info from the useDialogData hook
  const { dialogRef, currentBook } = useDialogData()

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
