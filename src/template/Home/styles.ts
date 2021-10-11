import styled from 'styled-components'

import * as InputStyles from 'components/InputText/styles'

export const Container = styled.section`
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
`

export const Sections = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`

export const SearchSection = styled.form`
  ${InputStyles.Input} {
    margin-right: 1.6rem;
  }

  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WeatherSection = styled(Sections)``

export const MusicListSection = styled(Sections)``
