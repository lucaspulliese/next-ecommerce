import Head from 'next/head';
import Header from '../components/Header'

export default ({ children, title = 'Next.js Ecommerce' }) => (
  <div className="app-main">
    <Head>
      <title>{ title }</title>
    </Head>

    <Header />

    <main>
      { children }
    </main>
  </div>
)