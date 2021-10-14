import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 0.5rem;

  background-color: #050a30;
  color: #d4f1f4;
  width: 14rem;
  height: 14rem;

  box-shadow: 0 2px 4px #000;
`

export const Weather = styled.h3`
  font-size: 3.2rem;
  text-transform: uppercase;

  span {
    font-size: 2.4rem;
    font-weight: 400;
  }
`

export const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.8rem;
`
