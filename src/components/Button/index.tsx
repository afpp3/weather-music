import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  handleClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, handleClick }: ButtonProps) => (
  <S.Wrapper onClick={handleClick}>{children}</S.Wrapper>
)

export default Button
