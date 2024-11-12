import './Filters.css'
import { simplifyAndSort } from '../../../utils/array-utils'
import Fieldset from '../Fieldset/Fieldset'
import Filter from './Filter'
import { BookType } from '../../../global/types'
import { useBooksStore } from '../../../hooks/useBooksStore'

export default function Filters() {
  // Get the book data object from the Zustand store
  const books = useBooksStore((state) => state.books)

  // Remove duplicates from array and then sort it alphabetically
  const authors: string[] = books
    ? simplifyAndSort(books.map((book: BookType) => book.author))
    : []
  const series: string[] = books
    ? simplifyAndSort(books.map((book: BookType) => book.series))
    : []

  return (
    <Fieldset legend='filters'>
      <Filter label={'author'} options={authors} />
      <Filter label={'series'} options={series} />
    </Fieldset>
  )
}
