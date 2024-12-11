import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import useFilters from '../../hooks/useFilters'

export default function SeriesPanel() {
  const { currentValue, handleFilterChange, filterOptions } =
    useFilters('series')

  return (
    <MobilePanel title='series'>
      <MobileHeader title='series' />
      <MobileContent>
        {filterOptions.map((option) => (
          <MobileRadioButton
            key={option}
            name='series'
            value={option}
            onChange={handleFilterChange}
            checked={currentValue === option}
          />
        ))}
      </MobileContent>
      <MobileButtons />
    </MobilePanel>
  )
}
