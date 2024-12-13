import { BookType } from '../global/types'
import { removeDuplicates } from './array-utils'
// import { getStepsByNumbers } from './utilities'

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
  // Sort the array alphabetically
  uniqueTags.sort()

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

// export function filterListHeadingsByLength(books: BookType[]) {
//   // get the longest book length and the shortest book length

// }

export function filterListHeadings(books: BookType[], sortSetting: string) {
  // Make an array of just the sort value and the id
  const array = books.map((b) => ({
    sort: (b[sortSetting as keyof BookType] as string) ?? '',
    id: b.id,
  }))

  // if (sortSetting === 'length') {
  //   // // turn all the lengths into numbers
  //   // const lengthArray = array.map((book) => {
  //   //   return {
  //   //     sort: Number(book.sort),
  //   //     id: book.id,
  //   //   }
  //   // })
  //   // // Get the steps to measure all of the book lengths by 100
  //   // const pageLengths = lengthArray.map((book) => book.sort)
  //   // const steps = getStepsByNumbers(pageLengths, 100)
  //   // // find the books that have a length closest to the steps
  //   // const filteredLengthArray = steps.map((step, index) => {
  //   //   return lengthArray.filter(
  //   //     (book) => book.sort <= step && book.sort >= steps[index + 1]
  //   //   )
  //   // })
  //   // // Get the first book of each group
  //   // const firstBooks = filteredLengthArray.map((group) => group[0])
  //   // console.log({ filteredLengthArray })
  //   // return firstBooks
  // }

  if (sortSetting !== 'title' && sortSetting !== 'length') {
    const firstBooks = array.filter(
      (book, index, array) =>
        array.findIndex((t) => t.sort === book.sort) === index
    )
    return firstBooks
  }
}

// Function to filter the book description by the markdown tags
export function filterDescription(description: string) {
  // remove <p> tags
  const cleanedDescription = description.replace(/<p>/g, '')
  // split the description into paragraphs
  const pArray = cleanedDescription.split('</p>')

  return pArray
}

// Function to filter the booklist array by the "sort" setting
export function sortBooks(books: BookType[], sortSetting: string) {
  // ******************** SORTING *********************//
  // Make an array of the item to group by (example: Series)
  const sortGroup: string[] = books.map((object) => {
    return (object[sortSetting as keyof BookType] ?? '') as string
  })
  // Filter out the duplicates
  const arrayToSort = removeDuplicates(sortGroup)
  // For each item in arrayToSort, loop through the original Array and sort by the arrayToSort values
  const newArray = arrayToSort.map((item) => {
    const groupArray = books.filter(
      (name) => name[sortSetting as keyof BookType] == item
    )
    return { sort: item, groupArray }
  })

  return newArray
}
