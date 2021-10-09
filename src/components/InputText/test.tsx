import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputText from '.'

describe('<InputText />', () => {
  it('should render the heading', () => {
    render(<InputText />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<InputText placeholder="placeholder" />)

    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  it('should change value when typing', async () => {
    const onInput = jest.fn()
    render(<InputText onInput={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'Text here'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })
})
