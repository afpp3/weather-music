import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type InputTextProps = {
  onInput?: (value: string) => void
  initialValue?: string
  placeholder?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputText = ({
  initialValue = '',
  onInput,
  placeholder,
  error,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...props}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
export default InputText
