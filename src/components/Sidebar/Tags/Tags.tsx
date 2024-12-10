import './Tags.css'
import Fieldset from '../Fieldset/Fieldset'
import Tag from './Tag/Tag'
import useTags from '../../../hooks/useTags'
import useTagsChange from '../../../hooks/useTagsChange'

export default function Tags() {
  // Get all the tags and whether they are disabled or not
  const allTags = useTags()
  // Get the tags change hook
  const { currentValue, handleChange } = useTagsChange()

  return (
    <Fieldset legend='Tags'>
      {allTags &&
        allTags.map((tag) => (
          <Tag
            key={tag.tag}
            value={tag.tag}
            disabled={tag.disabled}
            onChange={handleChange}
            checked={currentValue.includes(tag.tag)}
          />
        ))}
    </Fieldset>
  )
}
