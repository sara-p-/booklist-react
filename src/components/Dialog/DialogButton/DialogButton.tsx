type DialogButtonProps = {
  label: string
  icon: React.ReactNode
  direction: 'previous' | 'next'
}

export default function DialogButton({
  label,
  icon,
  direction,
}: DialogButtonProps) {
  return (
    <button className={`dialog-button ${direction}`}>
      <span className='visually-hidden'>{label}</span>
      {icon}
    </button>
  )
}
