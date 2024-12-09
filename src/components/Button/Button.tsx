import s from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
  const buttonClassName = className ? `${s.button} ${s[className]}` : s.button

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  )
}
