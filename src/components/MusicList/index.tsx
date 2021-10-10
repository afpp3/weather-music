import Link from 'next/link'
import * as S from './styles'
import Button from 'components/Button'

export type Music = {
  name: string
}

export type MusicListProps = {
  musics: Music[]
}

const MusicList = ({ musics }: MusicListProps) => (
  <S.Wrapper>
    <S.Heading>
      <h2>Músicas sugeridas</h2>
    </S.Heading>
    <S.List>
      {musics.length ? (
        musics.map((music, index) => <S.Item key={index}>{music.name}</S.Item>)
      ) : (
        <span>Nenhuma música encontrada!</span>
      )}
    </S.List>
    <S.Actions>
      <Link href="/music-list" passHref>
        <S.SavedLists>Listas salvas</S.SavedLists>
      </Link>
      <Button>Salvar</Button>
    </S.Actions>
  </S.Wrapper>
)

export default MusicList
