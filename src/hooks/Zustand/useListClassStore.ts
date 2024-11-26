import { create } from 'zustand'

type ListClassStore = {
  listClass: boolean
  setListClass: (listClass: boolean) => void
}

export const useListClassStore = create<ListClassStore>((set) => ({
  listClass: false,
  setListClass: (listClass: boolean) => set({ listClass }),
}))
