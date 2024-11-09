import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'
import SortBox from '../Sort/SortBox'
import Filters from '../Filter/Filters'
import { BookType } from '../../../global/types'
type SidebarProps = {
  handleValueChange: (value: string | boolean, key: string) => void
  bookList: BookType[]
  data: BookType[]
}

export default function Sidebar({ handleValueChange, data }: SidebarProps) {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles handleValueChange={handleValueChange} />
        <SortBox handleValueChange={handleValueChange} />
        <Filters handleValueChange={handleValueChange} data={data} />
      </div>
    </>
  )
}
