import buttonStyles from './MobilePanelButton.module.css'

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
    <button className={buttonStyles.button} onClick={onClick}>
      <h2 className={buttonStyles.title}>{title}</h2>
      <p className={buttonStyles.value}>{value}</p>
    </button>
  )
}
