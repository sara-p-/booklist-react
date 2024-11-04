import './Toggles.css'
import Toggle from './Toggle/Toggle'
import Fieldset from '../Fieldset/Fieldset'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
  faTableCellsLarge,
  faList,
  faArrowUpAZ,
  faArrowDownAZ,
} from '@fortawesome/free-solid-svg-icons'
import { useId } from 'react'

export default function Toggles() {
  const id = useId()
  const toggleId = `${id}-toggle`

  return (
    <Fieldset legend='Toggles'>
      <Toggle
        label='Toggle dark/light theme'
        toggleId={toggleId}
        iconLeft={<FontAwesomeIcon className='icon' icon={faSun} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faMoon} />}
      />
      <Toggle
        label='Toggle grid/list view'
        toggleId={toggleId}
        iconLeft={<FontAwesomeIcon className='icon' icon={faTableCellsLarge} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faList} />}
      />
      <Toggle
        label='Toggle ascending/descending sort'
        toggleId={toggleId}
        iconLeft={<FontAwesomeIcon className='icon' icon={faArrowDownAZ} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faArrowUpAZ} />}
      />
    </Fieldset>
  )
}
