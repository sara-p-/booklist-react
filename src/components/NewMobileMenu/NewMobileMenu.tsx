import menuStyles from '../../styles/modules/menu.module.scss'
import OptionsPanel from '../../components/MobileMenu/MobilePanels/OptionsPanel/OptionsPanel'
import { useMobileMenuClassStore } from '../../hooks/Zustand/useMobileMenuClassStore'

export default function NewMobileMenu() {
  // Get the isActive state from the Zustand store to toggle the active class on the entire mobile menu
  const isActive = useMobileMenuClassStore((state) => state.isActive)

  return (
    <div className={`${menuStyles.menu} ${isActive && menuStyles.active}`}>
      <OptionsPanel />
    </div>
  )
}
