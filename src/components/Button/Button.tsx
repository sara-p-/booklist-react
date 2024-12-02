import s from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={`${s.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
