import { BookType } from '../global/types'

// function to create the image urls
export function createImageUrl(title: string) {
  const lowerCaseTitle = title.toLowerCase()
  const convertAnd = lowerCaseTitle.replace(/&/g, 'and')
  const removeSpecialCharacters = convertAnd.replace(/[^a-z0-9\s-]/g, '')
  const titleArray = removeSpecialCharacters.split(' ')
  const titleArrayWithDashes = titleArray.join('-')
  return `/book_${titleArrayWithDashes}.jpg`
}

// function to get the previous/next book in the array (for when the dialog is open)
export function getNextBook(
  direction: 'previous' | 'next',
  bookId: string,
  books: BookType[],
  setCurrentBook: (bookId: string) => void
) {
  const index = books.findIndex((book) => book.id === bookId)
  if (direction === 'previous') {
    if (index === 0) {
      const lastBook = books[books.length - 1]
      setCurrentBook(lastBook.id)
      return lastBook
    } else {
      const previousBook = books[index - 1]
      setCurrentBook(previousBook.id)
      return previousBook
    }
  } else {
    if (index === books.length - 1) {
      const firstBook = books[0]
      setCurrentBook(firstBook.id)
      return firstBook
    } else {
      const nextBook = books[index + 1]
      setCurrentBook(nextBook.id)
      return nextBook
    }
  }
}

// Function to create a stepped array of numbers based on the length of the books
export function getStepsByNumbers(
  numbers: number[],
  step: number,
  order: 'asc' | 'desc'
) {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    const steps = Math.floor(numbers[i] / step)
    const fullSteps = steps * 100
    result.push(fullSteps)
  }

  // remove duplicate numbers
  const uniqueResult = [...new Set(result)]

  const nonZeroArray = uniqueResult.filter((num) => num !== 0)

  let newArray = [nonZeroArray[0] + 100, ...nonZeroArray]

  if (order === 'asc') {
    newArray = [...nonZeroArray, nonZeroArray[nonZeroArray.length - 1] + 100]
  }

  // console.log({ newArray })

  return newArray
}

// Function to find the number that is closest to the target number but not greater than the target number
export function findClosestNumber(
  target: number,
  numbers: { length: number; id: string }[]
) {
  return numbers.reduce((prev, curr) =>
    Math.abs(curr.length - target) < Math.abs(prev.length - target) &&
    curr.length <= target
      ? curr
      : prev
  )
}

// Function to find all numbers between two numbers
export function findAllNumbersBetween(
  start: number,
  end: number,
  array: { length: number; id: string; title: string }[]
) {
  const result = array.filter(
    (book) => book.length >= start && book.length <= end
  )

  return result
}
