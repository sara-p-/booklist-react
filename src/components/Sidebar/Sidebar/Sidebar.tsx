import './Sidebar.css'
import Header from '../Header/Header'
import Toggles from '../Toggles/Toggles'

export default function Sidebar() {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <Toggles />
      </div>
    </>
  )
}
