import { BookType } from '../global/types'

// Function to filter an array by a key and value
export function filterArray(
  array: BookType[],
  filterLabel: keyof BookType,
  filterValue: string
) {
  const filteredArray = array.filter(
    (object) => object[filterLabel] === filterValue
  )

  return filteredArray
}
