import { DefaultValuesType } from '../../../global/types'
import { useDataStore } from '../../../hooks/Zustand/useDataStore'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import { createMobileMenuOptions } from '../../../utils/array-utils'
import MobileButtons from '../../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileContent from '../../MobileMenuComponents/MobileContent/MobileContent'
import MobileHeader from '../../MobileMenuComponents/MobileHeader/MobileHeader'
import MobilePanel from '../../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileRadioButton from '../MobileRadioButton/MobileRadioButton'

export function RadioPanels() {
  const settings = useSettingsStore((state) => state.settings)
  const data = useDataStore((state) => state.data)

  return (
    <>
      {Object.keys(settings).map((key) => {
        return (
          <MobilePanel key={key} title={key}>
            <MobileHeader title={key} />
            <MobileContent>
              {(() => {
                const options = createMobileMenuOptions(key, data)
                return options.map((option) => {
                  return (
                    <MobileRadioButton
                      key={option}
                      name={key}
                      value={option}
                      onChange={() => {}}
                      checked={false}
                    />
                  )
                })
              })()}
            </MobileContent>
            <MobileButtons></MobileButtons>
          </MobilePanel>
        )
      })}
    </>
  )
}
