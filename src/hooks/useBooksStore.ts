import { create } from 'zustand'
import { BookType } from '../global/types'

type BooksStore = {
  books: BookType[]
  setBooks: (books: BookType[]) => void
}

export const useBooksStore = create<BooksStore>((set) => ({
  books: [],
  setBooks: (books: BookType[]) => set({ books }),
}))
