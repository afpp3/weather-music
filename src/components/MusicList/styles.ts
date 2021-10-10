import { darken } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
`

export const Heading = styled.div`
  background-color: #050a30;
  border-radius: 1rem;
  color: #d4f1f4;
  padding: 1rem;
  text-align: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  list-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.li`
  padding: 1.2rem 0.6rem;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.6rem;
  padding: 2rem;
  background-color: hsl(220, 12%, 90%);
`

export const SavedLists = styled.a`
  color: #4040a1;
  text-decoration: none;
  cursor: pointer;
  padding: 0.1rem;
  transition: all, 0.2s linear;
  position: relative;

  &:hover {
    color: ${darken(0.2, '#4040a1')};

    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -0.5rem;
      width: 100%;
      border: 0.1rem solid #4040a1;
      animation: show-right 0.5s forwards;
    }
  }

  @keyframes show-right {
    from {
      opacity: 0;
      transform: translate3d(-20px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`
