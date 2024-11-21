import { create } from 'zustand'
import { BookType } from '../../global/types'

type DataStore = {
  data: BookType[]
  setData: (data: BookType[]) => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: [],
  setData: (data: BookType[]) => set({ data }),
}))
