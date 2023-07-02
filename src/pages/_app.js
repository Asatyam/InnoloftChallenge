import '@/styles/globals.css'
import { Providers } from '@/components/providers';


// axios.defaults.baseURL = 'https://api-test.innoloft.com';

export default function App({ Component, pageProps }) {
  return (
  <Providers>
    <Component {...pageProps} />
  </Providers>)
}
