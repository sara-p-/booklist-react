import './Tags.css'
import Fieldset from '../Fieldset/Fieldset'
import { useBooksStore } from '../../../hooks/useBooksStore'
import Tag from './Tag/Tag'
import { removeDuplicates } from '../../../utils/array-utils'

export default function Tags() {
  // Pull in all of the books
  const books = useBooksStore((state) => state.books)
  // Make an array of just the tags, which will be strings
  const tagStringArray = books?.map((book) => {
    const tags = book.tags.split(',')
    return tags
  })
  const flattenedTagStringArray = tagStringArray.flat()
  // Make an array of unique tags
  const uniqueTags = removeDuplicates(flattenedTagStringArray)

  return (
    <Fieldset legend='Tags'>
      {uniqueTags && uniqueTags.map((tag) => <Tag key={tag} value={tag} />)}
    </Fieldset>
  )
}
