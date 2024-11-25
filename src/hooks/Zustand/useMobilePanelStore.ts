import { create } from 'zustand'

type MobilePanelStore = {
  activePanel: string | null
  setActivePanel: (panel: string) => void
}

export const useMobilePanelStore = create<MobilePanelStore>((set) => ({
  activePanel: null,
  setActivePanel: (panel: string) => set({ activePanel: panel }),
}))
