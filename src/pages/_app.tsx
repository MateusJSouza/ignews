import { AppProps } from 'next/app' // props que o componente pode receber
import { Header } from '../components/Header/index'
import { Provider as NextAuthProvider } from 'next-auth/client'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
