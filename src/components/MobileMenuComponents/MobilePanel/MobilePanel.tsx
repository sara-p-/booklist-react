import { useActiveMobilePanelStore } from '../../../hooks/Zustand/useActiveMobilePanelStore'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'
import panelStyles from './MobilePanel.module.css'

interface MobilePanelProps {
  title: string
  children: React.ReactNode
}

export default function MobilePanel({ title, children }: MobilePanelProps) {
  // Get the current active panel from the store
  const activePanel = useActiveMobilePanelStore((state) => state.activePanel)
  // If the menu is open, the options panel should be active as well, regardless of what other panel is showing
  const isActive = useMobileMenuClassStore((state) => state.isActive)
  // Set the classes for the panel based on the active panel and the active menu state
  let classes = `${panelStyles.panel}`
  if (activePanel === title || (isActive && title === 'options')) {
    classes += ` ${panelStyles.active}`
  }

  return <div className={classes}>{children}</div>
}
