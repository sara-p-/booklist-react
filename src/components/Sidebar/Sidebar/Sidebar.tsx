import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'

type SidebarProps = {
  handleBookValueChange: (value: string, key: string) => void
}

export default function Sidebar({ handleBookValueChange }: SidebarProps) {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles handleBookValueChange={handleBookValueChange} />
        <SortBox />
      </div>
    </>
  )
}
