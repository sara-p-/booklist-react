import './SortBox.css'
import Fieldset from '../Fieldset/Fieldset'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDays,
  faHeading,
  faLayerGroup,
  faSitemap,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import SortButton from './SortButton/SortButton'
import { useState } from 'react'

type SortBoxProps = {
  handleValueChange: (value: string | boolean, key: string) => void
}

export default function SortBox({ handleValueChange }: SortBoxProps) {
  const [sortValue, setSortValue] = useState<string>('series')

  function handleSortChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setSortValue(value)
    handleValueChange(value, 'sort')
  }

  return (
    <Fieldset legend='Sort'>
      <SortButton
        label='series'
        checked={sortValue === 'series'}
        icon={<FontAwesomeIcon className='sort-icon' icon={faSitemap} />}
        handleSortChange={handleSortChange}
      />
      <SortButton
        label='title'
        checked={sortValue === 'title'}
        icon={<FontAwesomeIcon className='sort-icon' icon={faHeading} />}
        handleSortChange={handleSortChange}
      />
      <SortButton
        label='rating'
        checked={sortValue === 'rating'}
        icon={<FontAwesomeIcon className='sort-icon' icon={faStar} />}
        handleSortChange={handleSortChange}
      />
      <SortButton
        label='year'
        checked={sortValue === 'year'}
        icon={<FontAwesomeIcon className='sort-icon' icon={faCalendarDays} />}
        handleSortChange={handleSortChange}
      />
      <SortButton
        label='length'
        checked={sortValue === 'length'}
        icon={<FontAwesomeIcon className='sort-icon' icon={faLayerGroup} />}
        handleSortChange={handleSortChange}
      />
    </Fieldset>
  )
}
