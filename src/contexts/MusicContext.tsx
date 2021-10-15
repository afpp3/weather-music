import { Music } from 'components/MusicList'
import { createContext, ReactNode, useEffect, useState } from 'react'

type MusicListType = {
  date: string
  genre: string
  location: string
  musics: Music[]
  weather: string
}

type MusicProviderProps = {
  children: ReactNode
}

type MusicContextData = {
  getWeather: (location: string) => void
  getMusicListByGenre: (genre: string) => void
  saveMusicList: () => void
  location: string
  weather: string
  error: string
  city: string
  musics: Music[]
  genre: string
}

export const MusicContext = createContext({} as MusicContextData)

export function MusicsProvider({ children }: MusicProviderProps) {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [error, setError] = useState('')
  const [city, setCity] = useState('')
  const [musics, setMusics] = useState<Music[]>([])
  const [genre, setGenre] = useState('')
  const [musicList, setMusicList] = useState<MusicListType[]>([])

  const musicGenres = {
    rock: parseInt(weather) > 32,
    pop: parseInt(weather) < 32 && parseInt(weather) > 24,
    country: parseInt(weather) < 24 && parseInt(weather) > 16,
    alternative: parseInt(weather) < 16
  }

  const getWeather = async (location: string) => {
    setLocation(location)
    if (location) {
      setError('')
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPEN_WHEATHER_TOKEN}&units=metric&lang=pt_br`
        )
        const data = await response.json()
        setWeather(() => data.main.temp)
        setCity(data.name)
      } catch (err) {
        console.log(err)
      }
    } else {
      setError('Preencha o campo!')
      return
    }
  }

  const getMusicListByGenre = async (genre: string) => {
    try {
      const response = await fetch(
        `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genre}&limit=10`,
        {
          headers: {
            'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`
          }
        }
      )
      const data = await response.json()
      setMusics(data)
      setGenre(genre)
    } catch (err) {
      console.log(err)
    }
  }

  const generateMusicList = () => {
    if (musicGenres.rock) getMusicListByGenre('ROCK')

    if (musicGenres.pop) getMusicListByGenre('POP')

    if (musicGenres.country) getMusicListByGenre('COUNTRY')

    if (musicGenres.alternative) getMusicListByGenre('ALTERNATIVE')
  }

  useEffect(() => {
    generateMusicList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const saveMusicList = () => {
    const date = new Date().toLocaleDateString()
    const items = { musics: musics, location, weather, genre, date }
    setMusicList((oldItems) => [...oldItems, items])
    window.localStorage.setItem('items', JSON.stringify(musicList))
  }

  return (
    <MusicContext.Provider
      value={{
        weather,
        location,
        getWeather,
        error,
        city,
        getMusicListByGenre,
        musics,
        genre,
        saveMusicList
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}
