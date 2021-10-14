import React, { useContext, useState } from 'react'

import Button from 'components/Button'
import Header from 'components/Header'
import InputText from 'components/InputText'
import MusicList, { Music } from 'components/MusicList'
import WeatherCard from 'components/WeatherCard'

import { MusicContext } from 'contexts/MusicContext'

import * as S from './styles'
import Footer from 'components/Footer'

export type HomeTemplateProps = {
  weather: string
  musics: Music[]
}

const Home = () => {
  const [query, setQuery] = useState('')
  const { getWeather, error, weather, city, musics, saveMusicList } =
    useContext(MusicContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getWeather(query)
  }

  return (
    <>
      <Header title="Weather App" />
      <S.Container>
        <S.SearchSection onSubmit={handleSubmit}>
          <InputText
            placeholder="Buscar cidade"
            error={error}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            required
          />
          <Button>Buscar</Button>
        </S.SearchSection>

        <S.WeatherSection>
          <WeatherCard weather={weather} city={city} />
        </S.WeatherSection>

        <MusicList musics={musics} onSave={saveMusicList} />
      </S.Container>
      <Footer />
    </>
  )
}

export default Home
