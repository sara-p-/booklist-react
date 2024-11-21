import { create } from 'zustand'
import { useSettingsStore } from './useSettingsStore'

type OrderToggleState = {
  isOrderChecked: boolean
  setIsOrderChecked: (isOrderChecked: boolean) => void
}

export const useOrderToggleStore = create<OrderToggleState>((set) => ({
  isOrderChecked: false,
  setIsOrderChecked: (isOrderChecked: boolean) => {
    const settingsStore = useSettingsStore.getState()
    const settings = settingsStore.settings
    const setSettings = settingsStore.setSettings

    set({ isOrderChecked })
    setSettings({ ...settings, order: isOrderChecked })
  },
}))
