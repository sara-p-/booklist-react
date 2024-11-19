import { create } from 'zustand'

type listHeadingType = {
  sort: string | undefined
  listHeadings: Array<{ sort: string | undefined; id: string }>
  setListHeadings: (
    listHeadings: Array<{ sort: string | undefined; id: string }>
  ) => void
}

export const useListHeadingStore = create<listHeadingType>((set) => ({
  sort: '',
  listHeadings: [],
  setListHeadings: (listHeadings) => set({ listHeadings }),
}))
