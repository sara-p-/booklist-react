import s from './Button.module.css'

type ButtonBoxProps = {
  children: React.ReactNode
  className?: string
}

export default function ButtonBox({ children, className }: ButtonBoxProps) {
  return (
    <div className={`${s.box} ${className}`}>
      <div className={s.wrapper}>{children}</div>
    </div>
  )
}
