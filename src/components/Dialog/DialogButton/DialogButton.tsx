type DialogButtonProps = {
  label: string
  icon: React.ReactNode
  direction: 'previous' | 'next'
  onClick: () => void
}

export default function DialogButton({
  label,
  icon,
  direction,
  onClick,
}: DialogButtonProps) {
  return (
    <button className={`dialog-button ${direction}`} onClick={onClick}>
      <span className='visually-hidden'>{label}</span>
      {icon}
    </button>
  )
}
