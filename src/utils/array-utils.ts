import { BookType } from '../global/types'

// Function to pull out duplicates from an array so that each entry only appears once
export function removeDuplicates(array: string[]) {
  const filteredArray = array.filter((item, index, self) => {
    // For each item, if the index of that item matches the current index, return that item
    return self.indexOf(item) == index
  })

  return filteredArray
}

// Function to move empty strings to the end of an array
export function moveAndSortEmptySeries(
  array: { sort: string; groupArray: BookType[] }[]
) {
  //  Remove array items that have empty series, and add them to a new array
  const emptySeries = array.filter((obj) => obj.sort === '')

  return [...array.filter((obj) => obj.sort !== ''), ...emptySeries]
}

// Function to remove duplicates and sort an array
export function simplifyAndSort(array: string[]) {
  return removeDuplicates(array).sort()
}

// Function to order an array based on the Order Setting
export function orderSeries(
  array: { sort: string; groupArray: BookType[] }[],
  sortSetting: string
) {
  // ******************* SERIES ORDERING *******************//
  // If orderBy has a value (other than undefined), further sort the array by the value
  const subOrderedArray = array.map(({ groupArray }) => {
    const subOrderArray = groupArray.sort((a, b) =>
      a.number.localeCompare(b.number)
    )
    return { sortSetting, subOrderArray }
  })
  // remove the objects and replace with just the subArrays
  const subArrays = subOrderedArray.map(({ subOrderArray }) => {
    return subOrderArray
  })

  return subArrays
}

// Function to order the books based on the Order setting (asc vs desc)
export function orderBooks(
  array: { sort: string; groupArray: BookType[] }[],
  sort: string,
  order: boolean
) {
  // ******************** ASCENDING VS DESCENDING ORDER **************** //
  // Sort by the sort parameter
  let orderedArray = array.sort((a, b) => a.sort.localeCompare(b.sort))
  // If there is no series listed, move it to the end of the array
  const hasEmptySeries = orderedArray.some(
    (object: { sort: string }) => object.sort === ''
  )
  if (hasEmptySeries) {
    orderedArray = moveAndSortEmptySeries(orderedArray)
  }

  // if sort === rating, we need to alter the localeCompare to the numeric option
  if (sort === 'rating' || sort === 'year' || sort === 'length') {
    orderedArray = array.sort((a, b) =>
      a.sort.localeCompare(b.sort, undefined, { numeric: true })
    )
  }

  // If 'order' is true, switch from ascending to descending order
  if (order) orderedArray.reverse()

  // Create one giant array with a bunch of sub arrays
  const subArrays = orderedArray.map(({ groupArray }) => {
    return groupArray
  })

  return { subArrays, orderedArray }
}

// Function to create the arrays for the mobile menu options
export function createMobileMenuOptions(option: string, data: BookType[]) {
  let optionsArray: string[] = []

  switch (option) {
    case 'theme':
      optionsArray = ['light', 'dark']
      break
    case 'view':
      optionsArray = ['list', 'grid']
      break
    case 'order':
      optionsArray = ['asc', 'desc']
      break
    case 'sort':
      optionsArray = ['series', 'title', 'rating', 'year', 'length']
      break
    case 'author':
      optionsArray = data
        ? simplifyAndSort(data.map((book: BookType) => book.author))
        : []
      break
    case 'series':
      optionsArray = data
        ? simplifyAndSort(data.map((book: BookType) => book.series))
        : []
      break
  }

  return optionsArray
}
