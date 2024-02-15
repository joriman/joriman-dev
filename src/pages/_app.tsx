import '@/styles/globals.css'
import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import Layout from './layout'

const App: AppType = ({ Component, pageProps }) => {
  return ( 
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default trpc.withTRPC(App)