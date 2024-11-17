import { create } from 'zustand'

type CurrentBookStore = {
  currentBook: string
  setCurrentBook: (book: string) => void
}

export const useCurrentBookStore = create<CurrentBookStore>((set) => ({
  currentBook: '1',
  setCurrentBook: (book: string) => set({ currentBook: book }),
}))
