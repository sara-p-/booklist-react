import useGlobalReset from '../../hooks/useGlobalReset'
import Button from '../Button/Button'
import ButtonBox from '../Button/ButtonBox'

export default function MobileResetButton() {
  // Get the global reset hook
  const { handleGlobalReset } = useGlobalReset()

  return (
    <ButtonBox className='mobile'>
      <Button onClick={handleGlobalReset}>reset</Button>
    </ButtonBox>
  )
}
