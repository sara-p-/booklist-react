import './Sidebar.css'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'
import Tags from '../Tags/Tags'
import ResetButton from '../ResetButton/ResetButton'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Toggles />
      <SortBox />
      <Filters />
      <Tags />
      <ResetButton />
    </div>
  )
}
