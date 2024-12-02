import menuStyles from './MobileMenu.module.css'
import MobilePanel from '../MobilePanel/MobilePanel'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
// import { DefaultValuesType } from '../../../global/types'
// import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useRef, useState } from 'react'
import OptionsPanel from '../OptionsPanel/OptionsPanel'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'

export default function MobileMenu() {
  // Create a useRef for the entire mobile menu
  const menuRef = useRef<HTMLDivElement>(null)
  // Get the isActive state from the Zustand store to toggle the active class on the entire mobile menu
  const isActive = useMobileMenuClassStore((state) => state.isActive)
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)
  const panelRef = useRef<HTMLDivElement[]>([])
  const settings = useSettingsStore((state) => state.settings)
  const [activePanel, setActivePanel] = useState<string | null>('options')

  const handlePanelClick = (
    title: string,
    panelRef: React.RefObject<HTMLDivElement[]>
  ) => {
    const panel = panelRef?.current?.find(
      (panel) => panel.dataset.panel === title
    )
    if (panel) {
      panel.classList.toggle('active')
      setActivePanel(title)
    }
  }

  function handleBackButtonClick() {
    setActivePanel(null)
  }

  function handleCloseMenu() {
    menuRef.current?.classList.remove(menuStyles.active)
    setIsActive(false)
  }

  return (
    <div
      className={`${menuStyles.menu} ${isActive && menuStyles.active}`}
      ref={menuRef}
    >
      <OptionsPanel
        handlePanelClick={handlePanelClick}
        panelRef={panelRef}
        onBackButtonClick={handleCloseMenu}
      />

      {Object.keys(settings).map((key) => {
        return (
          <MobilePanel
            key={key}
            title={key}
            onButtonClick={() => handlePanelClick(key, panelRef)}
            onBackButtonClick={handleBackButtonClick}
            ref={(el) => {
              if (el) panelRef.current.push(el)
            }}
            activePanel={activePanel === key ? true : false}
          ></MobilePanel>
        )
      })}
    </div>
  )
}
