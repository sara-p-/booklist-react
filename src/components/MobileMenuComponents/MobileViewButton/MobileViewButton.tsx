import Button from '../../Button/Button'

import useBookInfo from '../../../hooks/useBookInfo'
import { useActiveMobilePanelStore } from '../../../hooks/Zustand/useActiveMobilePanelStore'
import { useMobileMenuClassStore } from '../../../hooks/Zustand/useMobileMenuClassStore'

export default function MobileViewButton() {
  // Get the number of currently selected books
  const selectedBooks = useBookInfo()
  const selectedBooksCount = selectedBooks.books.length
  // Get the active Panel so that we can set it to null when the button is clicked
  const activePanel = useActiveMobilePanelStore((state) => state.activePanel)
  const setActivePanel = useActiveMobilePanelStore(
    (state) => state.setActivePanel
  )
  // Clse the entire mobile menu when clicked
  const setIsActive = useMobileMenuClassStore((state) => state.setIsActive)

  function handleClick() {
    setActivePanel(null)
    setIsActive(false)
    console.log(activePanel)
  }

  return <Button onClick={handleClick}>view {selectedBooksCount} books</Button>
}
