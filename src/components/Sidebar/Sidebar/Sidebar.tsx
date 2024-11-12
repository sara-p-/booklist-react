import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'

type SidebarProps = {
  handleValueChange: (value: string | boolean, key: string) => void
}

export default function Sidebar({ handleValueChange }: SidebarProps) {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles handleValueChange={handleValueChange} />
        <SortBox handleValueChange={handleValueChange} />
        <Filters handleValueChange={handleValueChange} />
      </div>
    </>
  )
}
