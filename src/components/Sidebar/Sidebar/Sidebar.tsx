import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'
import Tags from '../Tags/Tags'
import ResetButton from '../ResetButton/ResetButton'

type SidebarProps = {
  handleMobileMenuClick: () => void
}

export default function Sidebar({ handleMobileMenuClick }: SidebarProps) {
  return (
    <>
      <Header handleMobileMenuClick={handleMobileMenuClick} />
      <div className='sidebar'>
        <Toggles />
        <SortBox />
        <Filters />
        <Tags />
        <ResetButton />
      </div>
    </>
  )
}
