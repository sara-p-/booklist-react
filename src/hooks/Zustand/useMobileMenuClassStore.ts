import { create } from 'zustand'

interface MobileMenuClassStore {
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

export const useMobileMenuClassStore = create<MobileMenuClassStore>((set) => ({
  isActive: false,
  setIsActive: (isActive) => set({ isActive }),
}))
