import menuStyles from './MobileMenu.module.css'
import OptionsPanel from '../MobilePanels/OptionsPanel'
import { useMobileMenuClassStore } from '../../hooks/Zustand/useMobileMenuClassStore'
import ThemePanel from '../MobilePanels/ThemePanel'
import OrderPanel from '../MobilePanels/OrderPanel'
import ViewPanel from '../MobilePanels/ViewPanel'
import SortPanel from '../MobilePanels/SortPanel'
import AuthorPanel from '../MobilePanels/AuthorPanel'
import SeriesPanel from '../MobilePanels/SeriesPanel'
import TagsPanel from '../MobilePanels/TagsPanel'
import MobileResetButton from '../MobileResetButton/MobileResetButton'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'
export default function MobileMenu() {
  // Get the isActive state from the Zustand store to toggle the active class on the entire mobile menu
  const isActive = useMobileMenuClassStore((state) => state.isActive)
  // Get the number of selected books
  // If the settings are not the default settings, show the reset button
  const settings = useSettingsStore((state) => state.settings)
  const defaultSettings = useSettingsStore((state) => state.defaultSettings)
  const isDefaultSettings =
    JSON.stringify(settings) === JSON.stringify(defaultSettings)

  return (
    <>
      {!isDefaultSettings && <MobileResetButton />}
      <div className={`${menuStyles.menu} ${isActive && menuStyles.active}`}>
        <OptionsPanel />
        <ThemePanel />
        <ViewPanel />
        <OrderPanel />
        <SortPanel />
        <AuthorPanel />
        <SeriesPanel />
        <TagsPanel />
      </div>
    </>
  )
}
