import { useOrderToggleStore } from '../../../hooks/Zustand/useOrderToggleStore'
import { useResetButtonStore } from '../../../hooks/Zustand/useResetButtonStore'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import ButtonBox from '../../Button/ButtonBox'
import Button from '../../Button/Button'

export default function ResetButton() {
  // Get the settings from the Zustand store
  const setSettings = useSettingsStore((state) => state.setSettings)
  const defaultSettings = useSettingsStore((state) => state.defaultSettings)
  // Get the resetButton state from the Zustand store
  const setResetButton = useResetButtonStore((state) => state.setResetButton)
  // Is the 'order' toggle checked? If so, reset the order to default
  const setIsOrderChecked = useOrderToggleStore(
    (state) => state.setIsOrderChecked
  )

  function handleClick() {
    setSettings(defaultSettings)
    setResetButton(true)
    setIsOrderChecked(false)
  }

  return (
    <ButtonBox>
      <Button className='reset' onClick={handleClick}>
        reset
      </Button>
    </ButtonBox>
  )
}
