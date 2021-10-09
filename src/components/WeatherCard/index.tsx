import * as S from './styles'

type WeatherCardProps = {
  weather: string
  description: string
}

const WeatherCard = ({ weather, description }: WeatherCardProps) => (
  <S.Wrapper>
    <S.Weather>
      {weather}
      <span>℃</span>
    </S.Weather>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default WeatherCard
