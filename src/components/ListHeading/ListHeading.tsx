import { BookType } from '../../global/types'
import { useListClassStore } from '../../hooks/Zustand/useListClassStore'
import { useListHeadingStore } from '../../hooks/Zustand/useListHeadingStore'
import { useSettingsStore } from '../../hooks/Zustand/useSettingsStore'
import styles from './ListHeading.module.css'

type ListHeadingProps = {
  book: BookType
}

export default function ListHeading({ book }: ListHeadingProps) {
  // Get the list class from the Zustand store to hide/show the list headings
  const { listClass } = useListClassStore((state) => state)
  // Get the sort setting from the store to define the heading
  const sort = useSettingsStore((state) => state.settings.sort)
  // Get the listHeadings from the store
  const listHeadings = useListHeadingStore((state) => state.listHeadings)

  const lengthTitle =
    sort === 'length'
      ? listHeadings.find((heading) => heading.id === book.id)?.sort
      : null

  if (sort === 'length') {
    return (
      <p className={`${styles.listHeading} ${listClass || styles.hide}`}>
        {`length: ${lengthTitle}+`}
      </p>
    )
  }

  return (
    <p className={`${styles.listHeading} ${listClass || styles.hide}`}>
      {sort}: {book[sort as keyof BookType]}
      {sort === 'rating' && '/10'}
    </p>
  )
}
