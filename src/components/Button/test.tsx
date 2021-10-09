import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button>search</Button>)

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      padding: '0.8rem',
      'font-size': '1.4rem'
    })
  })
})
