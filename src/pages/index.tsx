import { MusicsProvider } from 'contexts/MusicContext'

import Home from 'template/Home'

export default function Index() {
  return (
    <MusicsProvider>
      <Home />
    </MusicsProvider>
  )
}
