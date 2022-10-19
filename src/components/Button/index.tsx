import { IButton } from 'types/atomic-design'
import * as S from './styles'
import { FaExclamation, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'
import Spin from 'components/Spin'

const Button: React.FC<IButton> = ({
  classType = 'primary',
  width = '100%',
  textOfButton,
  isLoading = false,
  onClick
}) => {
  const isDisable = classType === 'disable'

  const iconType = {
    primary: <></>,
    disable: <></>,
    success: <FaCheckCircle size={'18'} />,
    info: <FaInfoCircle size={'18'} />,
    alert: <FaExclamation size={'18'} />,
    danger: <FaCheckCircle size={'18'} />
  }
  return (
    <S.ButtonDefault
      classType={classType}
      width={width}
      disabled={isDisable}
      onClick={onClick}
    >
      {iconType[classType] && <div>{iconType[classType]}</div>}
      {textOfButton}
      {isLoading && (
        <div>
          <Spin />
        </div>
      )}
    </S.ButtonDefault>
  )
}

export default Button
