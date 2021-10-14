import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  background-color: hsl(220, 12%, 92%);
  border: none;
  border-radius: 0.5rem;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
  padding: 1rem;
  width: 30rem;
`

export const Error = styled.span`
  font-size: 1.3rem;
  color: #dc3545;
  position: absolute;
  left: 0;
  bottom: -2rem;
`
