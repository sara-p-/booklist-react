import menuStyles from './NewMobileMenu.module.css'
import OptionsPanel from '../MobileMenu/MobilePanels/OptionsPanel/OptionsPanel'
import { useMobileMenuClassStore } from '../../hooks/Zustand/useMobileMenuClassStore'
import ThemePanel from '../MobileMenu/MobilePanels/ThemePanel/ThemePanel'
import OrderPanel from '../MobileMenu/MobilePanels/OrderPanel/OrderPanel'
import ViewPanel from '../MobileMenu/MobilePanels/ViewPanel/ViewPanel'
import SortPanel from '../MobileMenu/MobilePanels/SortPanel/SortPanel'
import AuthorPanel from '../MobileMenu/MobilePanels/AuthorPanel/AuthorPanel'
import SeriesPanel from '../MobileMenu/MobilePanels/SeriesPanel/SeriesPanel'

export default function NewMobileMenu() {
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
    </div>
  )
}
