import NavBar from '@/components/NavBar'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App<T extends { session: Session }>({ Component, pageProps }: AppProps<T>) {

  return <>
  <SessionProvider session={pageProps.session}>
    <NavBar />
    <Component {...pageProps} />
  </SessionProvider>
  </>
}
