import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';

const Product = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          
        </div>
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  );
}

export default Product
