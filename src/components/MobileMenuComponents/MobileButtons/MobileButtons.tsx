import ButtonBox from '../../Button/ButtonBox'
import MobileViewButton from '../MobileViewButton/MobileViewButton'

interface MobileButtonsProps {
  children?: React.ReactNode
}

export default function MobileButtons({ children }: MobileButtonsProps) {
  return (
    <ButtonBox isMobile>
      <MobileViewButton />
      {children}
    </ButtonBox>
  )
}
