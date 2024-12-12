import ButtonBox from '../../Button/ButtonBox'
import Button from '../../Button/Button'
import useGlobalReset from '../../../hooks/useGlobalReset'

export default function ResetButton() {
  // Get the global reset hook
  const { handleGlobalReset } = useGlobalReset()

  return (
    <ButtonBox>
      <Button className='reset' onClick={handleGlobalReset}>
        reset
      </Button>
    </ButtonBox>
  )
}
