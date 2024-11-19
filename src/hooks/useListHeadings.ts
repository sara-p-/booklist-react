import { useEffect, useState } from 'react'
import { BookType } from '../global/types'
import useBookInfo from './useBookInfo'

export function useListHeadings(sort: string) {
  const [listHeadings, setListHeadings] = useState<
    Array<{ sort: string | undefined; id: string }>
  >([])
  // Take the current bookList and define the id of the first book in each series
  const { books } = useBookInfo()
  // Make an array of just the series and remove the duplicates
  const array = books.map((b) => ({
    sort: b[sort as keyof BookType],
    id: b.id,
  }))
  // filter the array to only include the first book of each series
  const firstBooks = array.filter(
    (book, index, array) =>
      array.findIndex((t) => t.sort === book.sort) === index
  )

  useEffect(() => {
    setListHeadings(firstBooks)
  }, [firstBooks])

  return listHeadings
}
