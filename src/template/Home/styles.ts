import styled from 'styled-components'

export const Container = styled.section`
  max-width: 85vw;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
`

export const Sections = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`

export const SearchSection = styled.form`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.4rem;
`

export const WeatherSection = styled(Sections)``

export const MusicListSection = styled(Sections)``
