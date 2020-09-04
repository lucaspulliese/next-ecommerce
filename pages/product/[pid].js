import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';

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

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" className="btn btn--rounded btn--active">Description</button>
              <button type="button" className="btn btn--rounded">Reviews (2)</button>
            </div>

            <Description />
            <Reviews />
          </div>
        </div>
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  );
}

export default Product
