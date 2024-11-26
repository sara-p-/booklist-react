import { useCurrentBookStore } from './Zustand/useCurrentBookStore'
// import { useDialogRefStore } from './Zustand/useDialogRefStore'

export default function useDialogData(
  dialogRef?: React.RefObject<HTMLDialogElement>
) {
  // Get the current book from the Zustand store (to use in the dialog)
  const currentBook = useCurrentBookStore((state) => state.currentBook)
  const setCurrentBook = useCurrentBookStore((state) => state.setCurrentBook)

  // Set the dialogRef in the Zustand store
  // const setDialogRef = useDialogRefStore((state) => state.setDialogRef)
  // const dialogRef = useDialogRefStore((state) => state.dialogRef)

  const handleOpenDialog = (bookId: string) => {
    dialogRef?.current?.showModal()
    setCurrentBook(bookId)
    console.log(dialogRef?.current)
  }

  return { currentBook, setCurrentBook, dialogRef, handleOpenDialog }
}
