import './MobileMenu.css'
import MobilePanel from '../MobilePanel/MobilePanel'
import { useSettingsStore } from '../../../hooks/Zustand/useSettingsStore'
import { DefaultValuesType } from '../../../global/types'
import MobilePanelButton from '../MobilePanelButton/MobilePanelButton'
import { useRef } from 'react'

export default function MobileMenu() {
  const panelRef = useRef<HTMLDivElement[]>([])
  const settings = useSettingsStore((state) => state.settings)

  const handlePanelClick = (title: string) => {
    const panel = panelRef.current.find(
      (panel) => panel.dataset.panel === title
    )
    if (panel) {
      panel.classList.toggle('active')
    }
  }

  return (
    <div className='mobile-menu'>
      <MobilePanel title='options'>
        {Object.keys(settings).map((key) => {
          return (
            <MobilePanelButton
              key={key}
              title={key}
              onClick={() => handlePanelClick(key)}
              value={
                String(settings[key as keyof DefaultValuesType]) === ''
                  ? 'none'
                  : String(settings[key as keyof DefaultValuesType])
              }
            />
          )
        })}
      </MobilePanel>
      {Object.keys(settings).map((key) => {
        return (
          <MobilePanel
            key={key}
            title={key}
            onClick={() => handlePanelClick(key)}
            ref={(el) => {
              if (el) panelRef.current.push(el)
            }}
          ></MobilePanel>
        )
      })}
    </div>
  )
}
