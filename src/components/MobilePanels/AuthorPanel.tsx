import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileRadioButton from '../MobileMenuComponents/MobileRadioButton/MobileRadioButton'
import useFilters from '../../hooks/useFilters'
import useLocalReset from '../../hooks/useLocalReset'
import Button from '../Button/Button'

export default function AuthorPanel() {
  const { currentValue, handleFilterChange, filterOptions } =
    useFilters('author')
  // Get the local reset hook
  const { handleLocalReset } = useLocalReset('author')

  return (
    <MobilePanel title='author'>
      <MobileHeader title='author' />
      <MobileContent>
        {filterOptions.map((option) => (
          <MobileRadioButton
            key={option}
            name='author'
            value={option}
            onChange={handleFilterChange}
            checked={currentValue === option}
          />
        ))}
      </MobileContent>
      <MobileButtons>
        <Button onClick={handleLocalReset}>reset author</Button>
      </MobileButtons>
    </MobilePanel>
  )
}
