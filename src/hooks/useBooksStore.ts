import { create } from 'zustand'
import { BookType, DefaultValuesType } from '../global/types'
import { DEFAULT_VALUES } from '../global/global-variables'
import { filterArray } from '../utils/filter-utils'
import { moveAndSortEmptySeries, removeDuplicates } from '../utils/array-utils'

type BooksStore = {
  books: BookType[]
  settings: DefaultValuesType
  // setBooks: (books: BookType[]) => void
  setBooks: (books: BookType[], settings: DefaultValuesType) => void
  setSettings: (settings: DefaultValuesType) => void
}

export const useBooksStoreTest = create<BooksStore>((set) => ({
  books: [],
  settings: DEFAULT_VALUES,
  // setBooks: (books: BookType[]) => set({ books }),
  setSettings: (settings: DefaultValuesType) => set({ settings }),
  setBooks: (books: BookType[], settings: DefaultValuesType) => {
    let bookList: BookType[] = books
    const { author, series, sort, order } = settings
    // ******************** SHOW/HIDE *************************//
    // filter the books based on which ones should be shown and which ones should be hidden
    bookList = filterArray(bookList, 'show', 'show')

    // ******************** FILTERS *************************//
    // If a filter value is present, filter the main array by that value
    if (author !== '') {
      bookList = filterArray(bookList, 'author', author)
    }
    if (series !== '') {
      bookList = filterArray(bookList, 'series', series)
    }

    // ******************** SORTING *********************//
    // Make an array of the item to group by (example: Series)
    const sortGroup: string[] = bookList.map((object) => {
      return object[sort as keyof BookType]
    })
    // Filter out the duplicates
    const arrayToSort = removeDuplicates(sortGroup)
    // For each item in arrayToSort, loop through the original Array and sort by the arrayToSort values
    const newArray = arrayToSort.map((item) => {
      const groupArray = bookList.filter(
        (name) => name[sort as keyof BookType] == item
      )
      return { sort: item, groupArray }
    })

    // ******************** ASCENDING VS DESCENDING ORDER **************** //
    // Sort by the sort parameter
    let orderedArray = newArray.sort((a, b) => a.sort.localeCompare(b.sort))
    // If there is no series listed, move it to the end of the array
    const hasEmptySeries = orderedArray.some(
      (object: { sort: string }) => object.sort === ''
    )
    if (hasEmptySeries) {
      orderedArray = moveAndSortEmptySeries(orderedArray)
    }

    // if sort === rating, we need to alter the localeCompare to the numeric option
    if (sort === 'rating' || sort === 'year' || sort === 'length') {
      orderedArray = newArray.sort((a, b) =>
        a.sort.localeCompare(b.sort, undefined, { numeric: true })
      )
    }

    // If 'order' is true, switch from ascending to descending order
    if (order) orderedArray.reverse()

    // Create one giant array with a bunch of sub arrays
    let subArrays = orderedArray.map(({ groupArray }) => {
      return groupArray
    })

    // ******************* SERIES ORDERING *******************//
    // If orderBy has a value (other than undefined), further sort the array by the value
    if (sort !== 'title') {
      const subOrderedArray = orderedArray.map(({ groupArray }) => {
        const subOrderArray = groupArray.sort((a, b) =>
          a.number.localeCompare(b.number)
        )
        return { sort, subOrderArray }
      })
      // remove the objects and replace with just the subArrays
      subArrays = subOrderedArray.map(({ subOrderArray }) => {
        return subOrderArray
      })
    }

    // Flatten the given array into one giant array
    const formattedArray = subArrays.flat(1)

    set({ books: formattedArray, settings })
  },
}))
