import Head from 'next/head';
import Header from './../components/Header'

export default ({ children, title = 'This is the default title' }) => (
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