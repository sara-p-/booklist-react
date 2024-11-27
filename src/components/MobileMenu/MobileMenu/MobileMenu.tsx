import menuStyles from './MobileMenu.module.css'
import MobilePanel from '../MobilePanel/MobilePanel'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
// import { DefaultValuesType } from '../../../global/types'
// import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useRef, useState } from 'react'
import OptionsPanel from '../OptionsPanel/OptionsPanel'

export default function MobileMenu() {
  const panelRef = useRef<HTMLDivElement[]>([])
  const settings = useSettingsStore((state) => state.settings)
  const [activePanel, setActivePanel] = useState<string | null>(null)

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
    <div className={menuStyles.menu}>
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
          ></MobilePanel>
        )
      })}
    </div>
  )
}
