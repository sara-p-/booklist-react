import menuStyles from './MobileMenu.module.css'
import MobilePanel from '../MobilePanel/MobilePanel'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
// import { DefaultValuesType } from '../../../global/types'
// import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useRef } from 'react'
import OptionsPanel from '../OptionsPanel/OptionsPanel'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'
import { useActiveMobilePanelStore } from '../../../hooks/Zustand/useActiveMobilePanelStore'
export default function MobileMenu() {
  // Get the isActive state from the Zustand store to toggle the active class on the entire mobile menu
  const isActive = useMobileMenuClassStore((state) => state.isActive)
  const panelRef = useRef<HTMLDivElement[]>([])
  const settings = useSettingsStore((state) => state.settings)
  // Get the setActivePanel function from the Zustand store so we can set the active panel to null when the back button is clicked
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )
  const activePanel = useActiveMobilePanelStore((state) => state.activePanel)

  // Handle the click event for the panels
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

  return (
    <div className={`${menuStyles.menu} ${isActive && menuStyles.active}`}>
      <OptionsPanel handlePanelClick={handlePanelClick} panelRef={panelRef} />

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
          />
        )
      })}
    </div>
  )
}
