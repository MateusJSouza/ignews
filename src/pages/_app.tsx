import { AppProps } from 'next/app' // props que o componente pode receber

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
