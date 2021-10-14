import Link from 'next/link'
import * as S from './styles'
import Button from 'components/Button'

export type Music = {
  title: string
}

export type MusicListProps = {
  musics?: Music[]
  onSave?: () => void
}

const MusicList = ({ musics, onSave }: MusicListProps) => {
  return (
    <S.Wrapper>
      <S.Heading>
        <h2>Músicas sugeridas</h2>
      </S.Heading>
      <S.List>
        {musics?.length ? (
          musics.map((music, index) => (
            <S.Item key={index}>{music.title}</S.Item>
          ))
        ) : (
          <span>Nenhuma música encontrada!</span>
        )}
      </S.List>
      <S.Actions>
        <Link href="/music-list" passHref>
          <S.SavedLists>Listas salvas</S.SavedLists>
        </Link>
        <Button handleClick={onSave}>Salvar lista</Button>
      </S.Actions>
    </S.Wrapper>
  )
}

export default MusicList
