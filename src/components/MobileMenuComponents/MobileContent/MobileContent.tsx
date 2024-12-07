import panelContentStyles from './MobileContent.module.css'

interface MobileContentProps {
  children: React.ReactNode
}

export default function MobileContent({ children }: MobileContentProps) {
  return <fieldset className={panelContentStyles.fieldset}>{children}</fieldset>
}
