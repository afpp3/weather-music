import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header title="Title" />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
  })
})
