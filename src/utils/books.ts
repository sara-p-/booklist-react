import { BookType, DefaultValuesType } from '../global/global-variables'
import { filterArray } from './filters'
// Function to filter/sort the bookList based on what filters are selected
export function updateBookList(array: BookType[], settings: DefaultValuesType) {
  let bookList = array

  // ******************** SHOW/HIDE *************************//
  // filter the books based on which ones should be shown and which ones should be hidden
  bookList = filterArray(bookList, 'show', 'show')

  return bookList
}
