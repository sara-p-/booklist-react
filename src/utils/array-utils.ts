import { BookType } from '../global/global-variables'

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
