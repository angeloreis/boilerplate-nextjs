import * as S from './styles'

export interface OptionsProps {
  value: string | number
  description: string
  defaultValue?: boolean
}

interface SelectProps {
  data: OptionsProps[]
  placeholder?: string
  onChangeHandle?: () => Promise<void>
}

const Select = ({
  data,
  placeholder = 'Escolha uma opção...',
  onChangeHandle
}: SelectProps) => {
  return (
    <>
      {data && data.length > 0 ? (
        <S.Wrapper onChange={onChangeHandle} placeholder={placeholder}>
          <option value="initial">{placeholder}</option>
          {data.map((option, index) => (
            <option
              key={index}
              value={option.value}
              defaultValue={option.defaultValue ? option.value : undefined}
            >
              {option.description}
            </option>
          ))}
        </S.Wrapper>
      ) : (
        <h1>Nenhum dado informado</h1>
      )}
    </>
  )
}

export default Select
