import { useOrderToggleStore } from '../../../hooks/Zustand/useOrderToggleStore'
import { useResetButtonStore } from '../../../hooks/Zustand/useResetButtonStore'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import ButtonBox from '../../Button/ButtonBox'
import Button from '../../Button/Button'
import { DEFAULT_VALUES } from '../../../global/global-variables'

export default function ResetButton() {
  // Get the settings from the Zustand store
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the resetButton state from the Zustand store
  const setResetButton = useResetButtonStore((state) => state.setResetButton)
  // Is the 'order' toggle checked? If so, reset the order to default
  const setIsOrderChecked = useOrderToggleStore(
    (state) => state.setIsOrderChecked
  )

  function handleClick() {
    setSettings(DEFAULT_VALUES)
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
