import { create } from 'zustand'

type TagsCheckedStore = {
  isChecked: boolean
  tagsIsChecked: boolean
  setTagsIsChecked: (tagsIsChecked: boolean) => void
  setIsChecked: (isChecked: boolean) => void
}

export const useTagsCheckedStore = create<TagsCheckedStore>((set) => ({
  isChecked: false,
  tagsIsChecked: false,
  setTagsIsChecked: (tagsIsChecked) => set({ tagsIsChecked }),
  setIsChecked: (isChecked) => set({ isChecked }),
}))
