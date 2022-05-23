import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}