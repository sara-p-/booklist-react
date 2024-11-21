import { create } from 'zustand'

type listHeadingType = {
  listHeadings: Array<{ sort: string | undefined; id: string }>
  setListHeadings: (
    listHeadings: Array<{ sort: string | undefined; id: string }>
  ) => void
}

export const useListHeadingStore = create<listHeadingType>((set) => ({
  listHeadings: [],
  setListHeadings: (listHeadings) => set({ listHeadings }),
}))
