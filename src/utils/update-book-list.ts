import { BookType, DefaultValuesType } from '../global/global-variables'
import { filterArray } from './filters'
import { moveAndSortEmptySeries, removeDuplicates } from './array-utils'
// Function to filter/sort the bookList based on what filters are selected
export function updateBookList(
  array: BookType[],
  { order, sort, author, series, tags }: DefaultValuesType
) {
  let bookList = array

  // ******************** SHOW/HIDE *************************//
  // filter the books based on which ones should be shown and which ones should be hidden
  bookList = filterArray(bookList, 'show', 'show')

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
  const hasEmptySeries = orderedArray.some((object) => object.sort === '')
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

  return formattedArray
}
