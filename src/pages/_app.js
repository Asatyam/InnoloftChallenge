import '@/styles/globals.css'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  return (
  <Provider>
    <Component {...pageProps} />
  </Provider>)
}
