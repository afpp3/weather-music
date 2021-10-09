import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  padding: 0.8rem;
  color: #d4f1f4;
  background-color: #4040a1;
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s linear;
  font-size: 1.4rem;

  &:hover {
    background-color: ${darken(0.15, '#4040a1')};
  }
`
