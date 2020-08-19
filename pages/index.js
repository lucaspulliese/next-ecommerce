import Layout from './../layouts/Main';
import PageIntro from './../components/PageIntro';
import ProductsFeatured from './../components/products-featured';
import Footer from './../components/footer';

const IndexPage = () => (
  <Layout>
    <PageIntro />

    <section className="featured">
      <div className="container">
        <article className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h3>New arrivals are now in!</h3>
            <a href="#" className="btn btn--rounded">Show Collection</a>
          </div>
        </article>
        
        <article className="featured-item featured-item-small-first">
          <div className="featured-item__content">
            <h3>Basic t-shirts $29,99</h3>
            <a href="#" className="btn btn--rounded">More details</a>
          </div>
        </article>
        
        <article className="featured-item featured-item-small">
          <div className="featured-item__content">
            <h3>Sale this summer</h3>
            <a href="#" className="btn btn--rounded">VIEW ALL</a>
          </div>
        </article>
      </div>
    </section>

    <ProductsFeatured />
    <Footer />
  </Layout>
)


export default IndexPage