import buttonStyles from './Button.module.css'

type ButtonBoxProps = {
  children: React.ReactNode
  className?: string
}

export default function ButtonBox({ children, className }: ButtonBoxProps) {
  // If a className is passed in, add it to the box
  const boxClassName = className
    ? `${buttonStyles.box} ${buttonStyles[className]}`
    : buttonStyles.box

  return (
    <div className={boxClassName}>
      <div className={buttonStyles.wrapper}>{children}</div>
    </div>
  )
}
