import { IButton } from 'types/atomic-design'
import * as S from './styles'

const Button: React.FC<IButton> = ({
  classType = 'primary',
  width = '100%',
  textOfButton,
  onClick
}) => {
  const isDisable = classType === 'disable'
  return (
    <S.ButtonDefault
      classType={classType}
      width={width}
      disabled={isDisable}
      onClick={onClick}
    >
      {textOfButton}
    </S.ButtonDefault>
  )
}

export default Button
