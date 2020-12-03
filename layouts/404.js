import Head from 'next/head';
import Header from '../components/header';
import { useRouter } from 'next/router';

export default ({ children, title = 'Next.js Ecommerce' }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; { title }</title>
      </Head>

      <Header isErrorPage />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}