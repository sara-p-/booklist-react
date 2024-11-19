import { BookType } from '../global/types'

// function to create the image urls
export function createImageUrl(title: string) {
  const lowerCaseTitle = title.toLowerCase()
  const removeSpecialCharacters = lowerCaseTitle.replace(/[^a-z0-9\s-]/g, '')
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
