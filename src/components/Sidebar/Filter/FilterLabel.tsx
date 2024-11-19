type FilterLabelProps = {
  label: string
  value: string
}

export default function FilterLabel({ label, value }: FilterLabelProps) {
  if (value === '') {
    return (
      <span className='filter-button-value'>
        <span className='selected-label'>{label}</span>
      </span>
    )
  } else {
    return (
      <span className='filter-button-value'>
        <span className='selected-label'>
          <strong>{label}:</strong>
        </span>
        <span className='selected-value'>{value}</span>
      </span>
    )
  }
}
