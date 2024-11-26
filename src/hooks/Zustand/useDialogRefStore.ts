import { create } from 'zustand'
import { createRef } from 'react'

type DialogRefStore = {
  dialogRef: React.RefObject<HTMLDialogElement>
  setDialogRef: (ref: React.RefObject<HTMLDialogElement>) => void
}

export const useDialogRefStore = create<DialogRefStore>((set) => ({
  dialogRef: createRef<HTMLDialogElement>(),
  setDialogRef: (ref) => set({ dialogRef: ref }),
}))
