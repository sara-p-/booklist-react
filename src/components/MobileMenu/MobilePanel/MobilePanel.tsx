import { forwardRef } from 'react'
import { MobilePanelHeader } from '../MobilePanelHeader/MobilePanelHeader'
import { useDataStore } from '../../../hooks/Zustand/useDataStore'
import { createMobileMenuOptions } from '../../../utils/array-utils'
import MobileRadioButton from '../MobileRadioButton/MobileRadioButton'

type MobilePanelProps = {
  title: string
  children?: React.ReactNode
  onClick?: () => void
}

const MobilePanel = forwardRef<HTMLDivElement, MobilePanelProps>(
  ({ title, children, onClick }, ref) => {
    const data = useDataStore((state) => state.data)

    const options = createMobileMenuOptions(title, data)

    return (
      <div className='mobile-panel' data-panel={title} ref={ref}>
        <MobilePanelHeader title={title} onClick={() => onClick?.()} />
        <div className='mobile-wrapper'>
          {children
            ? children
            : options.map((option) => {
                return (
                  <MobileRadioButton
                    key={option}
                    label={option}
                    name={title}
                    value={option}
                  />
                )
              })}
        </div>
      </div>
    )
  }
)

export default MobilePanel
