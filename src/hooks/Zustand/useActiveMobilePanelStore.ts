import { create } from 'zustand'

interface ActiveMobilePanelState {
  activePanel: string | null
  setActivePanel: (panel: string | null) => void
}

export const useActiveMobilePanelStore = create<ActiveMobilePanelState>(
  (set) => ({
    activePanel: null,
    setActivePanel: (panel) => set({ activePanel: panel }),
  })
)
