// pages/_app.jsx
// The custom App component wraps all pages with the Layout component and imports global styles.

import Layout from '../components/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}