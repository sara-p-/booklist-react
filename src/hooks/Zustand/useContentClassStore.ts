import { create } from 'zustand'

type ContentClassStore = {
  contentClass: string
  view: boolean
  setContentClass: (view: boolean) => void
}

export const useContentClassStore = create<ContentClassStore>((set) => ({
  contentClass: 'content grid',
  view: false,
  setContentClass: (view: boolean) => {
    if (view) {
      set({ contentClass: 'content list' })
    } else {
      set({ contentClass: 'content grid' })
    }
  },
}))
