import './Tags.css'
import Fieldset from '../Fieldset/Fieldset'
import { useUpdateBooksStore } from '../../../hooks/useUpdateBookStore'
import Tag from './Tag/Tag'
import { useDataStore } from '../../../hooks/useDataStore'
import { filterCurrentTags } from '../../../utils/filter-utils'

export default function Tags() {
  // We need to compare all tags to the currently available tags (based on the books that are currently being displayed)
  // Pull in the books from the store (the books that are currently being displayed)
  const books = useUpdateBooksStore((state) => state.books)
  // Pull in the original bookList
  const originalData = useDataStore((state) => state.data)
  // Make an array of all the tags and whether they are disabled or not
  const allTags = filterCurrentTags(originalData, books)

  return (
    <Fieldset legend='Tags'>
      {allTags &&
        allTags.map((tag) => (
          <Tag key={tag.tag} value={tag.tag} disabled={tag.disabled} />
        ))}
    </Fieldset>
  )
}
