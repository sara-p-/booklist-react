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
  const tagStringArray = books.length
    ? books.map((book) => book.tags?.split(', ') || [])
    : []
  const flattenedTagStringArray: string[] = tagStringArray.length
    ? tagStringArray.flat()
    : []
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
    const tagArray = book.tags?.split(', ')
    // check to see if all of the selected tags are in the array
    const success = formattedTagsArray.every(
      (tag) => tagArray?.indexOf(tag) !== -1
    )
    // If so, add the book to the new bookList array
    if (success) {
      newBooksArray.push(book)
    }
  })

  return newBooksArray
}

export function filterListHeadings(books: BookType[], sortSetting: string) {
  let firstBooks: { sort: string; id: string }[] = []
  if (sortSetting === 'series' || sortSetting === 'year') {
    // Make an array of just the series and remove the duplicates
    const array = books.map((b) => ({
      sort: (b[sortSetting as keyof BookType] as string) ?? '',
      id: b.id,
    }))
    // filter the array to only include the first book of each series
    firstBooks = array.filter(
      (book, index, array) =>
        array.findIndex((t) => t.sort === book.sort) === index
    )
  }

  return firstBooks
}

// Function to filter the book description by the markdown tags
export function filterDescription(description: string) {
  // remove <p> tags
  const cleanedDescription = description.replace(/<p>/g, '')
  // split the description into paragraphs
  const pArray = cleanedDescription.split('</p>')

  return pArray
}
