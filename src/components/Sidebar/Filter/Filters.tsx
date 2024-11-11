import './Filters.css'
import { BookType } from '../../../global/types'
import { simplifyAndSort } from '../../../utils/array-utils'
import Fieldset from '../Fieldset/Fieldset'
import Filter from './Filter'

type FiltersProps = {
  handleValueChange: (value: string | boolean, key: string) => void
  data: BookType[]
}

export default function Filters({ handleValueChange, data }: FiltersProps) {
  // Remove duplicates from array and then sort it alphabetically
  const authors: string[] = data
    ? simplifyAndSort(data.map((book) => book.author))
    : []
  const series: string[] = data
    ? simplifyAndSort(data.map((book) => book.series))
    : []

  return (
    <Fieldset legend='filters'>
      <Filter
        label={'author'}
        options={authors}
        handleValueChange={handleValueChange}
      />
      <Filter
        label={'series'}
        options={series}
        handleValueChange={handleValueChange}
      />
    </Fieldset>
  )
}