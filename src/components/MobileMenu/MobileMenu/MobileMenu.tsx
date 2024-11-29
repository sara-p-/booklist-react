import menuStyles from './MobileMenu.module.css'
import MobilePanel from '../MobilePanel/MobilePanel'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
// import { DefaultValuesType } from '../../../global/types'
// import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { forwardRef, useRef, useState } from 'react'
import OptionsPanel from '../OptionsPanel/OptionsPanel'

function MobileMenu() {
  const menuRef = useRef<HTMLDivElement>(null)
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
    // if (activePanel === 'options') {
    //   console.log('options')
    // }
  }

  return (
    <div className={menuStyles.menu} ref={menuRef}>
      <OptionsPanel
        handlePanelClick={handlePanelClick}
        panelRef={panelRef}
        onBackButtonClick={handleBackButtonClick}
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

export default forwardRef<HTMLDivElement>(MobileMenu)
