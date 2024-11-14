import { create } from 'zustand'

type ResetButtonStore = {
  resetButton: boolean
  setResetButton: (resetButton: boolean) => void
}

export const useResetButtonStore = create<ResetButtonStore>((set) => ({
  resetButton: false,
  setResetButton: (resetButton) => set({ resetButton }),
}))
