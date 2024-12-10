import MobilePanel from '../MobileMenuComponents/MobilePanel/MobilePanel'
import MobileHeader from '../MobileMenuComponents/MobileHeader/MobileHeader'
import MobileContent from '../MobileMenuComponents/MobileContent/MobileContent'
import MobileButtons from '../MobileMenuComponents/MobileButtons/MobileButtons'
import MobileTag from '../MobileMenuComponents/MobileTag/MobileTag'
import Button from '../Button/Button'
import useTagsChange from '../../hooks/useTagsChange'
import useTags from '../../hooks/useTags'

export default function SeriesPanel() {
  // Get all the tags and whether they are disabled or not
  const tags = useTags()
  // Get the tags change hook
  const { currentValue, handleChange, handleClearTags } = useTagsChange()

  return (
    <MobilePanel title='tags'>
      <MobileHeader title='tags' />
      <MobileContent>
        {tags.map((tag) => (
          <MobileTag
            key={tag.tag}
            tag={tag.tag}
            checked={currentValue.includes(tag.tag)}
            onChange={handleChange}
          />
        ))}
      </MobileContent>
      <MobileButtons>
        <Button onClick={handleClearTags}>clear</Button>
      </MobileButtons>
    </MobilePanel>
  )
}
