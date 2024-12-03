import { useActiveMobilePanelStore } from '../../../../hooks/Zustand/useActiveMobilePanelStore'
import panelStyles from './MobilePanel.module.css'

interface MobilePanelProps {
  title: string
  children: React.ReactNode
}

export default function MobilePanel({ title, children }: MobilePanelProps) {
  // Get the current active panel from the store
  const activePanel = useActiveMobilePanelStore((state) => state.activePanel)

  return (
    <div
      className={`${panelStyles.panel} ${
        activePanel === title ? panelStyles.active : ''
      }`}
    >
      {children}
    </div>
  )
}
