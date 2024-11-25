import { forwardRef } from 'react'
import { MobilePanelHeader } from '../MobilePanelHeader/MobilePanelHeader'

type MobilePanelProps = {
  title: string
  children?: React.ReactNode
  onClick?: () => void
}

const MobilePanel = forwardRef<HTMLDivElement, MobilePanelProps>(
  ({ title, children, onClick }, ref) => {
    return (
      <div className='mobile-panel' data-panel={title} ref={ref}>
        <MobilePanelHeader title={title} onClick={() => onClick?.()} />
        <div className='mobile-wrapper'>{children}</div>
      </div>
    )
  }
)

export default MobilePanel
