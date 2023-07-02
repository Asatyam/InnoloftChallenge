import '@/styles/globals.css'
import { Provider } from 'react-redux'
import axios from 'axios'
import { store } from '@/store/store';

// axios.defaults.baseURL = 'https://api-test.innoloft.com';

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}
