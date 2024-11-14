import { useResetButtonStore } from '../../../hooks/useResetButtonStore'
import { useSettingsStore } from '../../../hooks/useSettingsStore'
// import { useTagsCheckedStore } from '../../../hooks/useTagsCheckedStore'
import './ResetButton.css'

export default function ResetButton() {
  // Get the settings from the Zustand store
  const setSettings = useSettingsStore((state) => state.setSettings)
  const defaultSettings = useSettingsStore((state) => state.defaultSettings)
  // Get the resetButton state from the Zustand store
  const setResetButton = useResetButtonStore((state) => state.setResetButton)

  function handleClick() {
    setSettings(defaultSettings)
    setResetButton(true)
  }

  return (
    <div className='button-box'>
      <button className='button reset-button' onClick={handleClick}>
        Reset
      </button>
    </div>
  )
}
