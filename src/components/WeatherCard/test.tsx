import { render, screen } from '@testing-library/react'

import WeatherCard from '.'

describe('<WeatherCard />', () => {
  it('should render the WeatherCard with description', () => {
    render(<WeatherCard weather="20" description="description" />)

    expect(screen.getByRole('heading', { name: /20/i })).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })
})
