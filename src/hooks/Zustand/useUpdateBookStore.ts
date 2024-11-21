import { create } from 'zustand'
import { BookType, DefaultValuesType } from '../../global/types'
import {
  filterArray,
  filterTagsArray,
  sortBooks,
} from '../../utils/filter-utils'
import { orderBooks, orderSeries } from '../../utils/array-utils'

type BooksStore = {
  books: BookType[]
  setBooks: (books: BookType[], settings: DefaultValuesType) => void
}

export const useUpdateBooksStore = create<BooksStore>((set) => ({
  books: [],
  setBooks: (books: BookType[], settings: DefaultValuesType) => {
    let bookList: BookType[] = books
    const { author, series, sort, order, tags } = settings

    // ******************** SHOW/HIDE *************************//
    // filter the books based on which ones should be shown and which ones should be hidden
    bookList = filterArray(bookList, 'show', 'show')

    // ******************** TAGS *************************//
    // if tags are present, filter the main array by those values
    if (tags.length) {
      bookList = filterTagsArray(bookList, tags)
    }

    // ******************** FILTERS *************************//
    // If a filter value is present, filter the main array by that value
    if (author !== '') {
      bookList = filterArray(bookList, 'author', author)
    }
    if (series !== '') {
      bookList = filterArray(bookList, 'series', series)
    }

    // ******************** SORTING *********************//
    const newArray: { sort: string; groupArray: BookType[] }[] = sortBooks(
      bookList,
      sort
    )

    // ******************** ASCENDING VS DESCENDING ORDER **************** //
    const { orderedArray, subArrays } = orderBooks(newArray, sort, order)

    // ******************* SERIES ORDERING *******************//
    // If orderBy has a value (other than undefined), further sort the array by the value
    let orderedSubArrays = subArrays
    if (sort !== 'title') {
      orderedSubArrays = orderSeries(orderedArray, sort)
    }

    // Flatten the given array into one giant array
    const formattedArray = orderedSubArrays.flat(1)

    set({ books: formattedArray })
  },
}))
