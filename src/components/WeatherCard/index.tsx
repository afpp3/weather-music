import * as S from './styles'

type WeatherCardProps = {
  weather: string
  city: string
}

const WeatherCard = ({ weather, city }: WeatherCardProps) => {
  return (
    <S.Wrapper>
      <S.Weather>
        {weather}
        {!!weather && <span>℃</span>}
      </S.Weather>
      <S.Description>{city}</S.Description>
    </S.Wrapper>
  )
}

export default WeatherCard
