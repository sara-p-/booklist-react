import { BookType } from '../global/types'
import { removeDuplicates } from './array-utils'

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

export function filterTags(books: BookType[]) {
  // Make an array of just the tags, which will be strings
  const tagStringArray = books?.map((book) => book.tags.split(', '))
  const flattenedTagStringArray = tagStringArray.flat()
  // Make an array of unique tags
  const uniqueTags = removeDuplicates(flattenedTagStringArray)

  return uniqueTags
}

// Function to filter an array by a key and value
export function filterCurrentTags(data: BookType[], currentBooks: BookType[]) {
  const allTags = filterTags(data)
  const currentTags = filterTags(currentBooks)

  const tagObject = allTags.map((tag) => {
    if (currentTags.includes(tag)) {
      return { tag, disabled: false }
    } else {
      return { tag, disabled: true }
    }
  })

  return tagObject
}

// function that takes the tags string, and filters the booklist array by which books include the substrings in the tags
export function filterTagsArray(books: BookType[], tags: string[]) {
  // remove any dashes
  const formattedTagsArray = tags.map((item) => {
    return item.replace(/-/g, ' ')
  })

  const newBooksArray: BookType[] = []

  books.forEach((book) => {
    // make the tag string of each book an array
    const tagArray = book.tags.split(', ')
    // check to see if all of the selected tags are in the array
    const success = formattedTagsArray.every(
      (tag) => tagArray.indexOf(tag) !== -1
    )
    // If so, add the book to the new bookList array
    if (success) {
      newBooksArray.push(book)
    }
  })

  return newBooksArray
}
