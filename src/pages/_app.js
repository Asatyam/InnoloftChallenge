import '@/styles/globals.css'
import { Providers } from '@/components/providers';
import axios from 'axios'
import { store } from '@/store/store';

// axios.defaults.baseURL = 'https://api-test.innoloft.com';

export default function App({ Component, pageProps }) {
  return (
  <Providers>
    <Component {...pageProps} />
  </Providers>)
}
