import './Toggle.css'
import { useEffect, useState } from 'react'
import { useSettingsStore } from '../../../../hooks/Zustand/useSettingsStore'
import { useListClassStore } from '../../../../hooks/Zustand/useListClassStore'
import { useOrderToggleStore } from '../../../../hooks/Zustand/useOrderToggleStore'
import { faArrowDown91, faArrowUp91 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ToggleProps = {
  label: string
  toggleId: string
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
}

export default function Toggle({
  label,
  toggleId,
  iconLeft,
  iconRight,
}: ToggleProps) {
  // Set the initial state of the toggle
  const [isChecked, setIsChecked] = useState(false)
  // Get the order toggle state (set by the sort button selection) from the Zustand store
  const isOrderChecked = useOrderToggleStore((state) => state.isOrderChecked)
  // Get the settings from the Zustand store
  const settings = useSettingsStore((state) => state.settings)
  const setSettings = useSettingsStore((state) => state.setSettings)
  // Get the content class from the Zustand store
  const setListClass = useListClassStore((state) => state.setListClass)
  // Set the initial state of the toggle based on the order toggle state
  useEffect(() => {
    if (toggleId === 'order') {
      setIsChecked(isOrderChecked)
    }
  }, [isOrderChecked, toggleId])

  // Handle the toggle change
  function handleToggleChange(): void {
    const newValue = !isChecked
    setIsChecked(newValue)

    switch (toggleId) {
      case 'theme':
        if (!isChecked) {
          setSettings({ ...settings, theme: 'light' })
        } else {
          setSettings({ ...settings, theme: 'dark' })
        }
        break
      case 'view':
        setListClass(newValue)
        if (!isChecked) {
          setSettings({ ...settings, view: 'grid' })
        } else {
          setSettings({ ...settings, view: 'list' })
        }
        break
      case 'order':
        if (!isChecked) {
          setSettings({ ...settings, order: 'desc' })
        } else {
          setSettings({ ...settings, order: 'asc' })
        }
        break
    }
  }

  return (
    <div className='toggle-box'>
      {isOrderChecked && toggleId === 'order' ? (
        <FontAwesomeIcon icon={faArrowUp91} className='icon' />
      ) : (
        iconLeft
      )}
      <input
        className='toggle'
        type='checkbox'
        value={toggleId}
        checked={isChecked}
        onChange={handleToggleChange}
        id={toggleId}
      />
      <label htmlFor={toggleId}>{label}</label>
      {isOrderChecked && toggleId === 'order' ? (
        <FontAwesomeIcon icon={faArrowDown91} className='icon' />
      ) : (
        iconRight
      )}
    </div>
  )
}
