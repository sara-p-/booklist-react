import fieldsetStyles from './Fieldset.module.css'

type FieldsetProps = {
  legend: string
  children: React.ReactNode
}

export default function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <fieldset className={fieldsetStyles.fieldset}>
      <legend className={fieldsetStyles.legend}>{legend}</legend>
      <div className={fieldsetStyles.content}>{children}</div>
    </fieldset>
  )
}
