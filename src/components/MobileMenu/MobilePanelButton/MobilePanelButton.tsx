type MobilePanelButtonProps = {
  title: string
  value: string
  onClick: () => void
}

export default function MobilePanelButton({
  title,
  value,
  onClick,
}: MobilePanelButtonProps) {
  return (
    <button className='mobile-panel-button' onClick={onClick}>
      <h2 className='title'>{title}</h2>
      <p className='value'>{value}</p>
    </button>
  )
}
