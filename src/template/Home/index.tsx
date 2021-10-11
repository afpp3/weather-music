import Button from 'components/Button'
import Header from 'components/Header'
import InputText from 'components/InputText'
import MusicList from 'components/MusicList'
import WeatherCard from 'components/WeatherCard'

import musics from 'components/MusicList/mock'

import * as S from './styles'
import Footer from 'components/Footer'

const Home = () => (
  <>
    <Header title="Weather App" />
    <S.Container>
      <S.SearchSection>
        <InputText placeholder="Buscar cidade" />
        <Button>Buscar</Button>
      </S.SearchSection>

      <S.WeatherSection>
        <WeatherCard weather="14" description="Nublado" />
      </S.WeatherSection>

      <MusicList musics={musics} />
    </S.Container>
    <Footer />
  </>
)

export default Home
