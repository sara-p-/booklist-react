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

export default function MobileMenu() {
  // Get the isActive state from the Zustand store to toggle the active class on the entire mobile menu
  const isActive = useMobileMenuClassStore((state) => state.isActive)

  return (
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
  )
}
