import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';

const Product = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery />
            <Content />
          </div>
        </div>
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  );
}

export default Product
