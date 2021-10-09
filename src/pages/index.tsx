import Button from 'components/Button'
import Header from 'components/Header'
import InputText from 'components/InputText'
import WeatherCard from 'components/WeatherCard'

export default function Home() {
  return (
    <section>
      <Header title="Weather App" />

      <InputText placeholder="Busque pela sua cidade" />
      <Button>Buscar</Button>

      <section>
        <WeatherCard weather="15" description="Nublado" />
      </section>
    </section>
  )
}
