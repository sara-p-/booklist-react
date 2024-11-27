import { create } from 'zustand'
import { DefaultValuesType } from '../../global/types'
import { DEFAULT_VALUES } from '../../global/global-variables'

type SettingsStore = {
  settings: DefaultValuesType
  defaultSettings: DefaultValuesType
  setSettings: (
    settings:
      | DefaultValuesType
      | ((prev: DefaultValuesType) => DefaultValuesType)
  ) => void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: DEFAULT_VALUES,
  defaultSettings: DEFAULT_VALUES,
  setSettings: (settings) =>
    set((state) => ({
      ...state,
      settings:
        typeof settings === 'function' ? settings(state.settings) : settings,
    })),
}))
