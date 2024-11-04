import './Fieldset.css'

type FieldsetProps = {
  legend: string
  children: React.ReactNode
}

export default function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className='fieldset-content'>{children}</div>
    </fieldset>
  )
}
