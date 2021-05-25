import * as S from './styles'

const Main = ({
  title = 'React Advanced',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="image of Atom and written right: React Advanced course"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer guy in front a computer"
    />
  </S.Wrapper>
)

export default Main
