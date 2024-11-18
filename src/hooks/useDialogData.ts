import { useRef } from 'react'
import { useCurrentBookStore } from './useCurrentBookStore'

export default function useDialogData() {
  // Get the current book from the Zustand store (to use in the dialog)
  const currentBook = useCurrentBookStore((state) => state.currentBook)
  const setCurrentBook = useCurrentBookStore((state) => state.setCurrentBook)

  // Function to open the dialog and pass it the current book
  const dialogRef = useRef<HTMLDialogElement>(null)
  const handleOpenDialog = (bookId: string) => {
    dialogRef.current?.showModal()
    setCurrentBook(bookId)
  }

  return { currentBook, setCurrentBook, dialogRef, handleOpenDialog }
}
