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
import { useEffect, useState } from 'react'
import { useResetButtonStore } from '../../../hooks/useResetButtonStore'
import { useSettingsStore } from '../../../hooks/useSettingsStore'
import { useOrderToggleStore } from '../../../hooks/useOrderToggleStore'

export default function SortBox() {
  const [sortValue, setSortValue] = useState<string>('series')

  // Get the order toggle from the Zustand store
  const setIsOrderChecked = useOrderToggleStore(
    (state) => state.setIsOrderChecked
  )
  // Get the reset button from the Zustand store
  const resetButton = useResetButtonStore((state) => state.resetButton)
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)

  // Handle the sort change
  function handleSortChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setSortValue(value)
    setSettings({ ...settings, sort: value })

    if (value === 'year' || value === 'rating' || value === 'length') {
      setIsOrderChecked(true)
    } else {
      setIsOrderChecked(false)
    }
  }

  // Reset the sort value when the reset button is clicked
  useEffect(() => {
    if (resetButton) {
      setSortValue('series')
    }
  }, [resetButton])

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
