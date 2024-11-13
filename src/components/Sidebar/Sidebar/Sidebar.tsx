import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'
import Tags from '../Tags/Tags'

export default function Sidebar() {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles />
        <SortBox />
        <Filters />
        <Tags />
      </div>
    </>
  )
}
