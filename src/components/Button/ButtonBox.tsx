import buttonStyles from './Button.module.css'

type ButtonBoxProps = {
  children: React.ReactNode
  isMobile?: boolean
}

export default function ButtonBox({ children, isMobile }: ButtonBoxProps) {
  // If a className is passed in, add it to the box
  const boxClassName = isMobile
    ? `${buttonStyles.box} ${buttonStyles.mobile}`
    : buttonStyles.box

  return (
    <div className={boxClassName}>
      <div className={buttonStyles.wrapper}>{children}</div>
    </div>
  )
}
