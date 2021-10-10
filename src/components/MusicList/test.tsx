import { render, screen } from '@testing-library/react'

import MusicList from '.'
import items from './mock'

describe('<MusicList />', () => {
  it('should render the Music List with items', () => {
    render(<MusicList musics={items} />)

    expect(
      screen.getByRole('heading', { name: /músicas sugeridas/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(items.length)
  })

  it('should render the save button and lists link', () => {
    render(<MusicList musics={items} />)

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /listas salvas/i })
    ).toBeInTheDocument()
  })
})
