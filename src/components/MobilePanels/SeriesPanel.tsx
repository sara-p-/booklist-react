import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import useFilters from '../../hooks/useFilters'
import useLocalReset from '../../hooks/useLocalReset'
import Button from '../Button/Button'

export default function SeriesPanel() {
  const { currentValue, handleFilterChange, filterOptions } =
    useFilters('series')
  // Get the local reset hook
  const { handleLocalReset } = useLocalReset('series')

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
      <MobileButtons>
        <Button onClick={handleLocalReset}>reset series</Button>
      </MobileButtons>
    </MobilePanel>
  )
}
