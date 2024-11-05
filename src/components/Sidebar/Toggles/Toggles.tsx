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
// import { useId } from 'react'

type TogglesProps = {
  handleBookValueChange: (value: string, key: string) => void
}

export default function Toggles({ handleBookValueChange }: TogglesProps) {
  // const id = useId()
  // const toggleId = `${id}-toggle`

  return (
    <Fieldset legend='Toggles'>
      <Toggle
        label='Toggle dark/light theme'
        toggleId='theme'
        iconLeft={<FontAwesomeIcon className='icon' icon={faSun} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faMoon} />}
        handleBookValueChange={handleBookValueChange}
      />
      <Toggle
        label='Toggle grid/list view'
        toggleId='view'
        iconLeft={<FontAwesomeIcon className='icon' icon={faTableCellsLarge} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faList} />}
        handleBookValueChange={handleBookValueChange}
      />
      <Toggle
        label='Toggle ascending/descending sort'
        toggleId='order'
        iconLeft={<FontAwesomeIcon className='icon' icon={faArrowDownAZ} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faArrowUpAZ} />}
        handleBookValueChange={handleBookValueChange}
      />
    </Fieldset>
  )
}
