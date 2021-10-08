import * as S from './styles'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
