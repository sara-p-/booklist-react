import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'

export default function Sidebar() {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles />
        <SortBox />
        <Filters />
      </div>
    </>
  )
}
