import { create } from 'zustand'

type SettingsUpdateStore = {
  isUpdated: boolean
  setIsUpdated: (isUpdated: boolean) => void
}

export const useSettingsUpdateStore = create<SettingsUpdateStore>((set) => ({
  isUpdated: false,
  setIsUpdated: (isUpdated) => set({ isUpdated }),
}))
