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

type TogglesProps = {
  handleValueChange: (value: string | boolean, key: string) => void
}

export default function Toggles({ handleValueChange }: TogglesProps) {
  // const id = useId()
  // const toggleId = `${id}-toggle`

  return (
    <Fieldset legend='Toggles'>
      <Toggle
        label='Toggle dark/light theme'
        toggleId='theme'
        iconLeft={<FontAwesomeIcon className='icon' icon={faSun} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faMoon} />}
        handleValueChange={handleValueChange}
      />
      <Toggle
        label='Toggle grid/list view'
        toggleId='view'
        iconLeft={<FontAwesomeIcon className='icon' icon={faTableCellsLarge} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faList} />}
        handleValueChange={handleValueChange}
      />
      <Toggle
        label='Toggle ascending/descending sort'
        toggleId='order'
        iconLeft={<FontAwesomeIcon className='icon' icon={faArrowDownAZ} />}
        iconRight={<FontAwesomeIcon className='icon' icon={faArrowUpAZ} />}
        handleValueChange={handleValueChange}
      />
    </Fieldset>
  )
}
